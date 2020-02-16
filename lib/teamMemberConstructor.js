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
    constructor(input, index){
        super(input, index);
        // Custom behaviour
        this.officeNumber = input.officeNumber;
    }
    getOffice(){ return `OfficeNumber: ${this.officeNumber}`}
    getRole(){ return `<i class="fas fa-tasks"></i> ${this.title} `}
}

function createManager(input, index){
    let M = new Manager(input, index);
    return (`
    <div class="teamMember">
    <div class="teamMemberHeading">
       <h2>${M.getName()}</h2>
       <h3>${M.getRole()}</h3>
    </div>
    <div class="teamMemberBody">
       <div>
          <p>${M.getId()}</p>
          <p>${M.getEmail()}</p>
          <p>${M.getOffice()}</p>
       </div>
    </div>
    </div>
    `);
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
    <div class="teamMember">
        <div class="teamMemberHeading">
            <h2>${E.getName()}</h2>
            <h3>${E.getRole()}</h3>
        </div>
        <div class="teamMemberBody">
            <div>
                <p>${E.getId()}</p>
                <p>${E.getEmail()}</p>
                <p>${E.getGithub()}</p>
            </div>
        </div>
    </div>
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
    getRole(){ return `<i class="fas fa-graduation-cap"></i> ${this.title} `}
}

function createIntern(input, index){
    let I = new Intern(input, index);
    return (`
    <div class="teamMember">
        <div class="teamMemberHeading">
            <h2>${I.getName()}</h2>
            <h3>${I.getRole()} </h3>
        </div>
        <div class="teamMemberBody">
            <div>
                <p>${I.getId()}</p>
                <p>${I.getEmail()}</p>
                <p>${I.getSchool()}</p>
            </div>
        </div>
    </div>
    `);
}


let createEmployee = (inputs) => {
    let htmlArray = [];
    inputs.forEach((input, index) => {
        if (input.title === 'Engineer') {
            htmlArray.push(createEngineer(input, index + 1));
        } else if (input.title === 'Intern') {
            htmlArray.push(createIntern(input, index + 1));
        }else if(input.title === 'Manager') {
            htmlArray.push(createManager(input, index + 1));
        }
    })
    return htmlArray.join("");
}


module.exports.createManager = createManager
module.exports.createEngineer = createEngineer
module.exports.createIntern = createIntern
module.exports.createEmployee = createEmployee 