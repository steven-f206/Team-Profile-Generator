const createEmployee = require('../lib/teamMemberConstructor').createEmployee;

let inputs = [
  { name: 'jan', title: 'Manager', email: 'janjan', officeNumber: '1',  id: 1},
  { name: 'kal', title: 'Engineer', email: 'kalkal', github: 'kalkal' },
  { name: 'era', title: 'Intern', email: 'eraera', school: 'aschool' }
]

test('Should return array values therefore truthy', () => {
  expect(createEmployee(inputs)).toBeTruthy();
});

test('Generated html should be', () => {
    expect(createEmployee(inputs)).toEqual(`
    <div class="teamMember">
        <div class="teamMemberHeading">
        <h2>jan</h2>
        <h3><i class="fas fa-tasks"></i> Manager </h3>
        </div>
        <div class="teamMemberBody">
            <div>
                <p>ID: 1</p>
                <p>Email: janjan</p>
                <p>OfficeNumber: 1</p>
            </div>
        </div>
    </div>

    <div class="teamMember">
        <div class="teamMemberHeading">
            <h2>kal</h2>
            <h3><i class="fas fa-code"></i> Engineer </h3>
        </div>
        <div class="teamMemberBody">
            <div>
                <p>ID: 2</p>
                <p>Email: kalkal</p>
                <p>GitHub: kalkal</p>
            </div>
        </div>
    </div>

    <div class="teamMember">
        <div class="teamMemberHeading">
            <h2>era</h2>
            <h3><i class="fas fa-graduation-cap"></i> Intern  </h3>
        </div>
        <div class="teamMemberBody">
            <div>
                <p>ID: 3</p>
                <p>Email: eraera</p>
                <p>School: aschool</p>
            </div>
        </div>
    </div>
    `);
});