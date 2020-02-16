const inquirer = require("inquirer");
const generateTeamHtml = require('./generateTeamHtml').generateTeamHtml;
const createManager = require('./teamMemberConstructor').createManager;


teamAssemblyQuestions = () => {

    inquirer
        .prompt([
            {
                name: 'name',
                message: 'What is your name?',
            },
            {
                type: "list",
                name: "title",
                message: "What is your job title within the company?",
                choices: ["Engineer", "Intern"],
            },
            {
                name: 'email',
                message: 'What is your email?',
            },
            {
                name: 'github',
                message: 'What is your github?',
                when: function (answers) {
                    // Only run if user set a position
                    if (answers.position == "Engineer") {
                        return !!answers.position;
                    }
                },
            },
            {
                name: 'school',
                message: 'What is your school?',
                when: function (answers) {
                    // Only run if user set a position
                    if (answers.position == "Intern") {
                        return !!answers.position;
                    }
                },
            },
        ])
        .then(answers => {
            //console.log(answers);
            //generateTeamHtml(answers)
            createManager(answers);
        });
}


module.exports.teamAssemblyQuestions = teamAssemblyQuestions