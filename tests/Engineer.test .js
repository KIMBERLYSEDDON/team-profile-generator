const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () =>{
        it("should create and object with a name, id, email, and github", ()=> {
            const engineer = new Engineer("Carl", 3, "Carl@web.com", "CarlIsCool");

            expect(engineer.name).toEqual("Carl");
            expect(engineer.id).toEqual(3);
            expect(engineer.id).toEqual("Carl@web.com");
            expect(engineer.github).toEqual("CarlIsCool");
        });
    })
    it("should throw an error if no input provided", () => {
        const cb =() => new Engineer();
        expect(cb).toThrow();
    });

    it("should throw an error if 'name' is not a string", () => {
        const cb = () => new Engineer(5,2,"Kevin@web.com", 3);
        const err = new Error("Name must be a string value");
        expect(cb).toThrowError(err);
    });

    it("should throw and error if id not a number", () => {
        const cb = () => new Engineer("Kevin", "id: 5", "Kevin@web.com", 4 )
        const err = new Error("Id expected to be a number value");

        expect(cb).toThrowError(err);
    });

    it("should throw error if email is not a string value", () => {
        const cb = () => new Engineer("Kevin", 2 , 4, 3);
        const err = new Error("email must be a string value");
        expect(cb).toThrowError(err);
    });
})
