const Manager = require('../lib/Manager');
const Manager = require('../lib/Manager');

test('creates a new manager', () => {
    const Manager = new Manager();

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.name.length).toBeGreaterThan(0);
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
  });

test('retrieves office number', () => {
    const Manager = new Manager();

    expect(manager.officeNumber).toEqual(expect.any(Number));
});