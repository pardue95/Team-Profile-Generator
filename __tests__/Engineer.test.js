const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee')


test('creates a Engineer object', () => {
    const ngineer = new Engineer('Claude', 95, 'cwpardue@gmail.com')

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});