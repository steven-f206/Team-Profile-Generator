// **** Base Employee class **** //
class Employee {
    constructor(input, index){
        this.id = index,
        this.title = input.title;
        this.email = input.email;
        this.name = input.name;
    }

    getId(){ () => console.log(this.id)}
    getName() { () => console.log(this.name) }
    getEmail() { () => console.log(this.email) }
    getRole() { () => console.log(this.title) } // Returns 'Employee' 
}

/ **** Manager **** //
class Manager extends Employee {
    constructor(input) {
        super(input.title, input.email, input.name);
        // Custom behaviour
        this.officeNumber = input.officeNumber;
    }
    /*getId(){ console.log(this.id)}*/
    getName() { console.log(this.name) }
    getEmail() { console.log(this.email) }
    getRole() { console.log(this.title) } // Returns 'Employee'
}

function createManager(input){
    let Manager = new Manager(input);
    console.log(Manager);
}

// **** Engineer **** //
class Engineer extends Employee {
    constructor(input, index) {
        super(input, index);
        // Custom behaviour
        this.github = input.github;
    }
    getGithub(){ console.log(this.github)}
}

function createEngineer(input, index) {
    let E = new Engineer(input, index);
    console.log(E);
    return (`
    <h1>${E.title}</h1>
    `);
}


// **** Intern **** //
class Intern extends Employee {
    constructor(input, index) {
        super(input, index);
        // Custom behaviour
        this.school = input.school;
    }
    getSchool(){ console.log(this.school)}
}

function createIntern(input, index){
    let I = new Intern(input, index);
    console.log(I);
    I.getRole();
}


let createEmployee = (inputs) => {
    let htmlArray = [];
    inputs.forEach((input, index) => {
        if (input.title === 'Engineer') {
            htmlArray.push(createEngineer(input, index + 2));
        } else if (input.title === 'Intern') {
            createIntern(input, index + 2);
        }
    })
    return htmlArray
}






module.exports.createManager = createManager
module.exports.createEngineer = createEngineer
module.exports.createIntern = createIntern
module.exports.createEmployee = createEmployee 