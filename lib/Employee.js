class Employee {
    constructor(name, id, email) {
        if (typeof name !== "string" || !name.trim().length){
            throw new Error("Name must be a string value")
        }
        if (typeof email !== "string" || !email.trim().length){
            throw new Error("email must be a string value")
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }

    getId(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee'
    }
}

module.exports = Employee;