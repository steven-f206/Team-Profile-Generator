const teamAssemblyQuestions = require('./lib/teamAssemblyQuestions').teamAssemblyQuestions;

function init() {
    // Step 1. Call questions required for assembling a teams data.
    teamAssemblyQuestions();
}

init();