const generateTeamHtml = require('../lib/generateTeamHtml').generateTeamHtml;

let inputs = [
  { name: 'zuko', email: 'zuko@was.com', officeNumber: '1', title: 'Manager', id: 1},
  { name: 'luke', title: 'Engineer', email: 'luke@was.com', github: 'lukeuke' },
  { name: 'er', title: 'Intern', email: 'gegrg', school: 'gegrg' }
]

test('Should be undefined as it does not return a value but creates the html', () => {
  expect(generateTeamHtml(inputs)).toBeUndefined();
});



