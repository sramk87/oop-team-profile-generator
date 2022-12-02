const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
        this.managerRole = 'Manager';
    }
    
    get officeNumber() {
        return this.officeNumber;
    }
    
    getRole() {
        return this.managerRole;
    }
};

module.exports = Manager;