// **** Base Employee class **** //
class Employee {
    constructor(input, index){
        this.id = index,
        this.title = input.title;
        this.email = input.email;
        this.name = input.name;
    }
    getName(){ return this.name}
    getRole(){ return this.title }  
    getId(){ return `ID: ${this.id}` }
    getEmail(){ return `Email: ${this.email}`}
}

/ **** Manager **** //
class Manager extends Employee {
    constructor(input) {
        super(input.title, input.email, input.name);
        // Custom behaviour
        this.officeNumber = input.officeNumber;
    }
    getOffice(){ return `OfficeNumber: ${this.officeNumber}`}
}

function createManager(input){
    let Manager = new Manager(input);
}

// **** Engineer **** //
class Engineer extends Employee {
    constructor(input, index) {
        super(input, index);
        // Custom behaviour
        this.github = input.github;
    }
    getGithub(){ return `GitHub: ${this.github}`}
    getRole(){ return `<i class="fas fa-code"></i> ${this.title} `}  
}

function createEngineer(input, index) {
    let E = new Engineer(input, index);
    return (`
    <h1>${E.getName()}</h1>
    <h1>${E.getRole()}</h1>
    <h1>${E.getId()}</h1>
    <h1>${E.getEmail()}</h1>
    <h1>${E.getGithub()}</h1>
    `);
}


// **** Intern **** //
class Intern extends Employee {
    constructor(input, index) {
        super(input, index);
        // Custom behaviour
        this.school = input.school;
    }
    getSchool(){ return `School: ${this.school}`}
}

function createIntern(input, index){
    let I = new Intern(input, index);
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