// Step 1 collect employee info
const collectEmployeeData = require('./lib/collectEmployeeData').collectEmployeeData;
const generateTeamHtml = require('./lib/generateTeamHtml').generateTeamHtml;

const init = async () => {
    const inputs = await collectEmployeeData();
    generateTeamHtml(inputs);
    console.log(inputs);
};

init();