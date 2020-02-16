class Employee {
    constructor(answers) {
        //this.id = answer.id,
        this.title = answers.title;
        this.email = answers.email;
        this.name = answer.name;
    }

    /*getId(){ () => console.log(this.id)}*/
    getName() { () => console.log(this.name) }
    getEmail() { () => console.log(this.email) }
    getRole() { () => console.log(this.title) } // Returns 'Employee' 
}

class Manager {
    constructor(answers) {
        this.role = answers.role,
            this.email = answers.email
    }
}

function createManager(answers) {
    let Manager = new Employee(answers);
    console.log(Manager);
}

class Engineer {
    constructor(answers) {
        this.role = answers.role,
            this.email = answers.email
    }
}

function createEngineer(answers) {
    let Engineer = new Employee(answers);
    console.log(Manager);
}

class Intern {
    constructor(answers) {
        this.role = answers.role,
            this.email = answers.email
    }
}

function createIntern(answers) {
    let Engineer = new Employee(answers);
    console.log(Manager);
}






module.exports.Employee = Employee
module.exports.createManager = createManager