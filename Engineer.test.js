const Engineer = require("../lib/Engineer");
describe("Engineer tests", () => {
    const createEngineer = () => new Engineer("test Engineer", 1, "test@gmail.com");

    it("get Engineer name should work properly", ()=> {
        const testEngineer = createEngineer();
        expect(testEngineer.getName()).toEqual("test Engineer");
    })

    //write a test case to test out id
    it("get Engineer ID should work properly", () => {
        const testEngineer = createEngineer();
        expect(testEngineer.getId()).toEqual(1);
    })

    //write a test case to test out email
    it("get Engineer email should work properly", () =>{
        const testEngineer = createEngineer();
        expect(testEngineer.getEmail()).toEqual("test@gmail.com");
    })
    //write a test case to test out role
    it("get Engineer role should work properly", () =>{
        const testEngineer = createEngineer();
        expect(testEngineer.getRole()).toEqual("Engineer");
    })
})
