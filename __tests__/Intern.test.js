const Intern = require('../lib/Intern');

test('creates a new intern', () => {
    const Intern = new Intern();

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.name.length).toBeGreaterThan(0);
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.school).toEqual(expect.any(String));
  });

test('retrieves school', () => {
    const Intern = new Intern();

    expect(intern.school).toEqual(expect.any(String));
});