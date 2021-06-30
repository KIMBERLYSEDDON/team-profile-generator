const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () =>{
        it("should create and object with a name, id, email, and github", ()=> {
            const manager = new Manager("Carl", 3, "Carl@web.com", "CarlIsCool");

            expect(manager.name).toEqual("Carl");
            expect(manager.id).toEqual(3);
            expect(manager.id).toEqual("Carl@web.com");
            expect(manager.github).toEqual("CarlIsCool");
        });
    })
})