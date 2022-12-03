const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);

        this.getGithub = github;
        this.engineerRole = 'Engineer';
    }
    
    getGithub () {
        return this.github;
    }
    
    getRole() {
        return this.engineerRole;
    }
};

module.exports = Engineer;