const Intern = require("../lib/Intern");
describe("Employee tests", () => {
    const createIntern = () => new Intern("test Intern", 1, "test@gmail.com");

    it("get Employee name should work properly", ()=> {
        const testIntern = createIntern();
        expect(testIntern.getName()).toEqual("test Intern");
    })

    //write a test case to test out id
    it("get Intern ID should work properly", () => {
        const testIntern = createIntern();
        expect(testIntern.getId()).toEqual(1);
    })

    //write a test case to test out email
    it("get Intern email should work properly", () =>{
        const testIntern = createIntern();
        expect(testIntern.getEmail()).toEqual("test@gmail.com");
    })
    //write a test case to test out role
    it("get Intern role should work properly", () =>{
        const testIntern = createIntern();
        expect(testIntern.getRole()).toEqual("Intern");
    })
})
