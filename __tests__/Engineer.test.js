const Engineer = require('../lib/Engineer');

test('creates a new engineerr', () => {
    const Engineer = new Engineer();

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.name.length).toBeGreaterThan(0);
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
  });

test('retrieves github', () => {
    const Engineer = new Engineer();

    expect(engineer.github).toEqual(expect.any(String));
});