const Employee = require('./Employee');

// **** Engineer **** //
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        // Custom behaviour
        this.github = github;
        this.role = "Engineer";
    }
    getGithub() { return this.github }
    getRole() { return this.role }
}

module.exports = Engineer