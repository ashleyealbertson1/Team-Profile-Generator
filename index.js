const inq = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');


const employees = [];


const addEngineer = () => {
    inq.prompt([{
        message: "What is the engineer's name?",
        type: 'input',
        name: 'firstName'
    },{
        message: "What is the engineer's employee ID?",
        type: 'input',
        name: 'employeeId'
    },{
        message: "What is the engineer's email address?",
        type: 'input',
        name: 'email'
    },{
        message: "What is the engineer's GitHub?",
        type: 'input',
        name: 'githubUsername'
    }]).then((answers) => {
        //Make engineer class from answers
        const engineer = new Engineer(answers.firstName, answers.employeeId, answers.email, answers.githubUsername);
        employees.push(engineer);
        promptForNextEmployee();
    })
}

const addIntern = () => {
    inq.prompt([{
        message: "What is the intern's name?",
        type: 'input',
        name: 'firstName'
    },{
        message: "What is the intern's employee ID?",
        type: 'input',
        name: 'employeeId'
    },{
        message: "What is the intern's email address?",
        type: 'input',
        name: 'email'
    },{
        message: "What is the intern's school?",
        type: 'input',
        name: 'school'
    }]).then((answers) => {
        //Make intern class from answers
        const intern = new Intern (answers.firstName, answers.employeeId, answers.email, answers.school);
        employees.push(intern);
        promptForNextEmployee();
    })
}

const generateHtml = (employee) => {
    let template = `
        <div>
            <h3>${employee.getName()}</h3>
            <div>Role:${employee.getRole()}</div>
            <div>ID:${employee.getId()}</div>
            <div>Email:${employee.getEmail()}</div>`;
    
    const role = employee.getRole();
    if(role === 'Engineer'){
        template = template + `<div>Github:${employee.getGithub()}</div>`
    } else if(role === 'Intern'){
        template = template + `<div>school:${employee.getSchool()}</div>`
    } else if(role === 'Manager'){
        template = template + `<div>Office Number:${employee.getofficeNumber()}</div>`
    }

    template = template + '</div>';
    return template;
}

const promptForNextEmployee = () => {
    inq.prompt([{
        message: 'Who would you like to add to your team?',
        type: 'list',
        choices: ['Engineer', 'Intern', 'Done'],
        name: 'nextOperation'
    }]).then((answers) => {
        switch(answers.nextOperation) {
            case 'Engineer': {
                //Add engineer;
                addEngineer();
                break;
            }

            case 'Intern': {
                //Add intern;
                addIntern();
                break;
            }

            case 'Done': {
                //Move to next step (Generating HTML)
                console.log(employees);

                let htmlBody = '';
                for(const employee of employees) {
                    htmlBody += generateHtml(employee);                    
                }

                const html = `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>
                    ${htmlBody}
                </body>
                </html>`
                
                        fs.writeFileSync('./index.html', html)

                break;
            }
        }
    })
}

inq.prompt([{
    message: 'What is your name?',
    type: 'input',
    name: 'firstName'
}, 
{
    message: 'What is your employee ID?',
    type: 'input', 
    name: 'employeeId'
}, 
{   message: 'What is your email address?',
    type: 'input',
    name: 'email'
},
{   message: 'What is your office number?',
    type: 'input',
    name: 'officeNumber'
}]).then((answers) => {
    //Make a manager using manager answers
    const manager = new Manager(answers.firstName, answers.employeeId, answers.email, answers.officeNumber);
    employees.push(manager);
    promptForNextEmployee();
})