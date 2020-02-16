// Step 1 collect employee info
const collectEmployeeData = require('./lib/collectEmployeeData').collectEmployeeData;
const createEmployee = require('./lib/teamMemberConstructor').createEmployee;
const generateTeamHtml = require('./lib/generateTeamHtml').generateTeamHtml;

const init = async () => {
    const inputs = await collectEmployeeData();
    //createEmployee(inputs);
    generateTeamHtml(inputs);
};

init();