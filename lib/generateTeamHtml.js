// Step 3 use consturctor functions to create use the called information to create then use objects
const createEmployee = require('./teamMemberConstructor').createEmployee;
var fs = require('fs');
var fs = require('fs');

function generateTeamHtml(inputs) {
    let htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>My Team</title>
    </head>
    <body>
    ${createEmployee(inputs)}
    </body>
    </html>
    `;


    fs.writeFile('./output/team.html', htmlContent, (error) => { /* handle error */ });
}

module.exports.generateTeamHtml = generateTeamHtml