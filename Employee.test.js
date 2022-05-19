const Employee = require("../lib/Employee");
describe("Employee tests", () => {
    const createEmployee = () => new Employee("test Employee", 1, "test@gmail.com");

    it("get Employee name should work properly", ()=> {
        const testEmployee = createEmployee();
        expect(testEmployee.getName()).toEqual("test Employee");
    })

    //write a test case to test out id
    it("get Employee ID should work properly", () => {
        const testEmployee = createEmployee();
        expect(testEmployee.getId()).toEqual(1);
    })

    //write a test case to test out email
    it("get Employee email should work properly", () =>{
        const testEmployee = createEmployee();
        expect(testEmployee.getEmail()).toEqual("test@gmail.com");
    })
    //write a test case to test out role
    it("get Employee role should work properly", () =>{
        const testEmployee = createEmployee();
        expect(testEmployee.getRole()).toEqual("Employee");
    })
})
