const inquirer = require("inquirer");

const collectInputs = async (inputs = []) => {
    const prompts = [
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
                if (answers.title == "Engineer") {
                    return !!answers.title;
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
        {
            type: 'confirm',
            name: 'again',
            message: 'Enter another input? ',
            default: true
        },
    ];

    const { again, ...answers } = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];
    return again ? collectInputs(newInputs) : newInputs;
};

const init = async () => {
    const inputs = await collectInputs();
    console.log(inputs);
    //generateTeamHtml(answers)
    createEmployee(input);
};

init(); 