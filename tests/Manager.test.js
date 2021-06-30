const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () =>{
        it("should create and object with a name, id, email, and officeNumber", ()=> {
            const manager = new Manager("Sally", 1, "Sally@web.com", 1);

            expect(manager.name).toEqual("Sally");
            expect(manager.id).toEqual(1);
            expect(manager.id).toEqual("Sally@web.com");
            expect(manager.officeNumber).toEqual(1);
        });
    })
    it("should throw an error if no input provided", () => {
        const cb =() => new Manager();
        expect(cb).toThrow();
    });

    it("should throw an error if 'name' is not a string", () => {
        const cb = () => new Manager(5,2,"Kevin@web.com", 3);
        const err = new Error("Name must be a string value");
        expect(cb).toThrowError(err);
    });

    it("should throw and error if id not a number", () => {
        const cb = () => new Manager("Kevin", "id: 5", "Kevin@web.com", 4 )
        const err = new Error("ID expected to be a number value");

        expect(cb).toThrowError(err);
    });

    it("should throw error if email is not a string value", () => {
        const cb = () => new Manager("Kevin", 2 , 4, 3);
        const err = new Error("email must be a string value");
        expect(cb).toThrowError(err);
    });

    it
})