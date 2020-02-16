//Step 2 generate data

const inquirer = require("inquirer");

const collectManagerData = async () => {
    let data;
    await inquirer
        .prompt([
            {
                message: "You are creating a new team first a manager then his team, what is the managers name?",
                name: "name",
            },
            {
                name: 'email',
                message: 'What is the managers email?',
            },
            {
                name: 'officeNumber',
                message: 'What is there managers office number?',
            },
        ])
        .then(answers => {
            answers.title = "Manager";
            answers.id = 1;
            data = answers
        })
    return data
} 

const collectEmployeeData = async (inputs = []) => {

    if (inputs.length === 0) {
        const managerData = await collectManagerData();
        inputs.push(managerData);
    }

    const prompts = [
        {
            name: 'name',
            message: "What is the employees' name?",
        },
        {
            type: "list",
            name: "title",
            message: "What is the employees' job title within the company?",
            choices: ["Engineer", "Intern"],
        },
        {
            name: 'email',
            message: "What is the employees' email?",
        },
        {
            name: 'github',
            message: "What is the employees' github?",
            when: function (answers) {
                // Only run if user set a position
                if (answers.title == "Engineer") {
                    return !!answers.title;
                }
            },
        },
        {
            name: 'school',
            message: "What is the employees' school?",
            when: function (answers) {
                // Only run if user set a position
                if (answers.title == "Intern") {
                    return !!answers.title;
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
    return again ? collectEmployeeData(newInputs) : newInputs;
};

module.exports.collectEmployeeData = collectEmployeeData 