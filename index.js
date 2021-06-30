const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHTML = require('./src/generateHTML')
const employees = [];


const writeFileAsync = util.promisify(fs.writeFile);

const baseQuestions = [
    {
        type: 'input',
        message: "What is this employee's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is this employee's ID number?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is this employee's email address?",
        name: 'email',
    },
]
const managerQuestions = [
    {
        type: 'input',
        message: "What is your name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is your employee ID number?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your office number?",
        name: 'officeNumber',
    },
]
const engineerQuestions = [
    ...baseQuestions,
    {
        type: 'input',
        message: "What is this employee's GitHub username?",
        name: 'github',
    },
]
const createEngineer =() => {
    inquirer.prompt(engineerQuestions)
    .then((response) => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        employees.push(engineer)
        menuPrompt();

    })
}
const internQuestions = [
    ...baseQuestions,
    {
        type: 'input',
        message: "What is this employee's school's name?",
        name: 'school',
    },
]
const menu = [
    {
        type: 'list',
        message: "What would you like to do next?",
        name: 'menu',
        choices: ["Add Engineer to my team", "Add Intern to my team", "Finish Team/End"]

    }
]
const createIntern =() => {
    inquirer.prompt(internQuestions)
    .then((response) => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        employees.push(intern)
        menuPrompt();

    })
}
const menuPrompt = () => {
    inquirer.prompt(menu).then((response) => {
        if(response.menu === "Add Engineer to my team"){
        createEngineer()
        } else if(response.menu === "Add Intern to my team"){
            createIntern()
        } else {
            finishBuildingTeam();
        }
        
    })   
}

const finishBuildingTeam = () => {
    writeFileAsync('./dist/index.html', generateHTML(employees), 
      (err) =>
      err ? console.error(err) : console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
};

const init = () => { 
    console.log("Welcome to the team builder, manager! Please answer the following prompts to build your team profile");
    
    inquirer.prompt(managerQuestions)
      .then((response) => {
          console.log(response)
          const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
          employees.push(manager)
          menuPrompt();

      })
      
    }
  
  init();