const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () =>{
        it("should create and object with a name, id, and email", ()=> {
            const employee = new Employee("Kevin", 1, "Kevin@web.com");

            expect(employee.name).toEqual("Kevin");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("Kevin@web.com");
        });
    })
})