const createEmployee = require('../lib/teamMemberConstructor').createEmployee;

let inputs = [
  { name: 'zuko', email: 'zuko@was.com', officeNumber: '1', title: 'Manager', id: 1},
  { name: 'luke', title: 'Engineer', email: 'luke@was.com', github: 'lukeluke' },
  { name: 'er', title: 'Intern', email: 'gegrg', school: 'gegrg' }
]

test('Should return array values therefore truthy', () => {
  expect(createEmployee(inputs)).toBeTruthy();
});


