const Employee = require('./Employee');

// **** Manager **** //
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    // Custom behaviour
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
  getOfficeNumber() { return this.officeNumber }
  getRole() { return this.role }
}

module.exports = Manager