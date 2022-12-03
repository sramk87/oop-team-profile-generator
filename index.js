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
            } else
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
            } else
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
            } else
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
        } else
        {return true;}
    }
    },
];

const emplQuestionaArr = [
    {
    type: 'list',
    name: 'emplRole',
    message: 'What is the role of the employee?',
    choices: ['Engineer', 'Intern'],
    },
    {
    type: 'input',
    name: 'engineersName',
    message: 'What is the name of the engineer?',
    validate: (engNameInput) => {
        if (!engNameInput) {
            console.log("Please enter the engineer's name")
            return false;
        } else
        {return true;}
    }
},
when: ({ emplRole }) => {
    if ( emplRole === 'Engineer') {
        return true;
    }
    else {
        return false;
    }
},
{
    type: 'input',
    name: 'engineersEmail',
    message: 'What is the email of the engineer?',
    validate: (engEmailInput) => {
        if (!engEmailInput) {
            console.log("Please enter the engineer's email")
            return false;
        } else
        {return true;}
    }
},
when: ({ emplRole }) => {
    if ( emplRole === 'Engineer') {
        return true;
    }
    else {
        return false;
    }
},
{
    type: 'input',
    name: 'engineersId',
    message: 'What is the Id of the engineer?',
    validate: (engIdInput) => {
        if (!engIdInput) {
            console.log("Please enter the engineer's id")
            return false;
        } else
        {return true;}
    }
},
when: ({ emplRole }) => {
    if ( emplRole === 'Engineer') {
        return true;
    }
    else {
        return false;
    }
},
{
    type: 'input',
    name: 'engineersGithub',
    message: 'What is the github of the engineer?',
    validate: (engGitInput) => {
        if (!engGitInput) {
            console.log("Please enter the engineer's github")
            return false;
        } else
        {return true;}
    }
},
when: ({ emplRole }) => {
    if ( emplRole === 'Engineer') {
        return true;
    }
    else {
     return false;
    }
},
{
    type: 'input',
    name: 'internsName',
    message: 'What is the name of the intern?',
    validate: (intNameInput) => {
        if (!intNameInput) {
            console.log("Please enter the intern's name")
            return false;
        } else
        {return true;}
    }
},
when: ({ emplRole }) => {
    if ( emplRole === 'Intern') {
        return true;
    }
    else {
        return false;
    }
},
{
    type: 'input',
    name: 'internsEmail',
    message: 'What is the email of the intern?',
    validate: (intEmailInput) => {
        if (!intEmailInput) {
            console.log("Please enter the intern's email")
            return false;
        } else
        {return true;}
    }
},
when: ({ emplRole }) => {
    if ( emplRole === 'Intern') {
        return true;
    }
    else {
        return false;
    }
},
{
    type: 'input',
    name: 'internsId',
    message: 'What is the id of the intern?',
    validate: (intIdInput) => {
        if (!intIdInput) {
            console.log("Please enter the intern's id")
            return false;
        } else
        {return true;}
    }
},
when: ({ emplRole }) => {
    if ( emplRole === 'Intern') {
        return true;
    }
    else {
        return false;
    }
},
{
    type: 'input',
    name: 'internsSchool',
    message: 'What is the school of the intern?',
    validate: (intSchoolInput) => {
        if (!intSchoolInput) {
            console.log("Please enter the intern's school")
            return false;
        } else
        {return true;}
    }
},
when: ({ emplRole }) => {
    if ( emplRole === 'Intern') {
        return true;
    }
    else {
        return false;
    }
},
{
    type: 'list',
    name: 'teamComplete',
    message: 'Is your team complete?',
    choices: ['Yes', 'No'],
    default: 'Yes'
}
];

function questionPrompts () {
    return inquirer.prompt(questionsArr)
}

function teamCompletionPrompt

const writeToFile = data => {
    fs.writeToFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile has been created, you can find it in dist/index.html')
        }
    })
};