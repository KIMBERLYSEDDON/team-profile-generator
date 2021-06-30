const fs = require('fs');
const Employee = require('../lib/Employee')

const generateHTML = (employees) => {
    let employeeData = ""
    employees.forEach(employee => {
        if(employee.getRole() === "Manager"){
            employeeData += generateManagerCard(employee)
        } else if(employee.getRole() === "Engineer"){
            employeeData += generateEngineerCard(employee)
        } else if(employee.getRole() === "Intern"){
            employeeData += generateInternCard(employee)
        }
    });

return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Team Profile</title>
    </head>  
    <body>
        <header class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4 text-">Team Profile: </h1>
        </div>
        </header>
        <main class="container">
        <section class="row">
    ${employeeData}
        </section>
        </main>
    </body>
    </html>`

}
const generateManagerCard = (manager) => {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body bg-primary text-light">
      <h5 class="card-title">${manager.name}</h5>
      <p class="card-text">${manager.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">employee id: ${manager.id}</li>
      <li class="list-group-item">office number: ${manager.officeNumber}</li>
      <li class="list-group-item">email: <a href="${manager.email}" class="card-link">${manager.email}</a></li>
    </ul>
  </div>`
}

const generateEngineerCard = (engineer) => {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body bg-primary text-light">
      <h5 class="card-title">${engineer.name}</h5>
      <p class="card-text">${engineer.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">employee id: ${engineer.id}</li>
      <li class="list-group-item">email: <a href="${engineer.email}" class="card-link">${engineer.email}</a></li>
      <li class="list-group-item">github: <a href="https://github.com/${engineer.github}" target="_blank" class="card-link">${engineer.github}</a></li>
    </ul>
  </div>`
}
const generateInternCard = (intern) => {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body bg-primary text-light">
      <h5 class="card-title">${intern.name}</h5>
      <p class="card-text">${intern.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">id: ${intern.id}</li>
      <li class="list-group-item">school: ${intern.school}</li>
      <li class="list-group-item">email: <a href="${intern.email}" class="card-link">${intern.email}</a></li>
    </ul>
  </div>`
}



module.exports = generateHTML