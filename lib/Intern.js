const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);

        this.school = this.school;
        this.internRole = 'Intern';
    }
    
    getSchool() {
        return this.school;
    }
    
    getRole() {
        return this.internRole;
    }
};

module.exports = Intern;