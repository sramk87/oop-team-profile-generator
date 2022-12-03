const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

function managerCard(manager) {
    return `
    <div class="card col-6">
    <div class="card-header">
    <h2>Manager</h2>
    <h3>${manager.name}</h3>
    </div>
    <div class="card-info">
    <p class="email">Email: ${manager.email}</p>
    <p class="id">Id: ${manager.id}</p>
    <p class="officenum">Office Number: ${manager.officeNumber}</p>
    </div>
    </div>
    `;
}

function engineerCard(engineer) {
    return `
    <div class="card col-6">
    <div class="card-header">
    <h2>Engineer</h2>
    <h3>${engineer.name}</h3>
    </div>
    <div class="card-info">
    <p class="email">Email: ${engineer.email}</p>
    <p class="id">Id: ${engineer.id}</p>
    <p class="github">Github: ${engineer.github}</p>
    </div>
    </div>
    `;
}

function internCard(intern) {
    return `
    <div class="card col-6">
    <div class="card-header">
    <h2>Intern</h2>
    <h3>${intern.name}</h3>
    </div>
    <div class="card-info">
    <p class="email">Email: ${intern.email}</p>
    <p class="id">Id: ${intern.id}</p>
    <p class="school">School: ${intern.school}</p>
    </div>
    </div>
    `;
}

function generateFullHtml()

