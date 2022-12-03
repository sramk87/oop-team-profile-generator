const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHtml = require('./src/generateHtml');


const questionsArr = [
    {
        type: 'input',
        name: 'managersName',
        message: 'What is the name of the manager?',
        validate: (nameInput) => {
            if (!nameInput) {
                console.log("Please enter the manager's name");
                return false;
            }
            {return true;}
        }
    },
    {
        type: 'input',
        name: 'managersId',
        message: 'What is the Id of the manager?',
        validate: (idInput) => {
            if(!idInput) {
                console.log("Please enter manager's Id");
                return false;
            }
            {return true;}
        }
    },
    {
        type: 'input',
        name: 'managersEmail',
        message: 'What is the email of the manager?',
        validate: (emailInput) => {
            if (!emailInput) {
                console.log("Please enter your manager's email");
                return false;
            }
            {return true;}
        }
    },
    {
    type: 'input',
    name: 'manOfficeNumber',
    message: 'What is the office number?',
    validate: (officeNumInput) => {
        if (!officeNumInput) {
            console.log("Please enter the manager's office number");
            return false;
        }
        {return true;}
    }
    },
];

const emplQuestionaArr = [
    {
        type: 'input',
        name: 'employeesName',
        message: 'What is the name of the employee?',
        validate: (nameInput) => {
            if (!nameInput) {
                console.log("Please enter the employee's name");
                return false;
            }
            {return true;}
        }
    },
    {
        type: 'input',
        name: 'employeesId',
        message: 'What is the Id of the employee?',
        validate: (idInput) => {
            if(!idInput) {
                console.log("Please enter employee's Id");
                return false;
            }
            {return true;}
        }
    },
    {
        type: 'input',
        name: 'employeesEmail',
        message: 'What is the email of the employee?',
        validate: (emailInput) => {
            if (!emailInput) {
                console.log("Please enter your employee's email");
                return false;
            }
            {return true;}
        }
    },
    {
    type: 'list',
    name: 'emplRole',
    message: 'What is the role of the employee?',
    choices: ['Engineer', 'Intern'],
    },
];