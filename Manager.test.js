const Manager = require("../lib/Manager");
describe("Manager tests", () => {
    const createManager = () => new Manager("test Manager", 1, "test@gmail.com");

    it("get Manager name should work properly", ()=> {
        const testManager = createManager();
        expect(testManager.getName()).toEqual("test Manager");
    })

    //write a test case to test out id
    it("get Manager ID should work properly", () => {
        const testManager = createManager();
        expect(testManager.getId()).toEqual(1);
    })

    //write a test case to test out email
    it("get Manager email should work properly", () =>{
        const testManager = createManager();
        expect(testManager.getEmail()).toEqual("test@gmail.com");
    })
    //write a test case to test out role
    it("get Manager role should work properly", () =>{
        const testManager = createManager();
        expect(testManager.getRole()).toEqual("Manager");
    })
})
