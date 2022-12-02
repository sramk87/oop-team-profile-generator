const { createTestScheduler } = require('jest');
const { INTEGER } = require('sequelize');
const Employee = require('../lib/Employee');

test('creates a new employee', () => {
    const employee = new Employee();
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
  });

test('retrieves employee name', () => {
  const employee = new Employee();

  expect(employee.getName().toEqual(expect.any(String)));
});

test('retrieves employee id', () => {
  const employee = new Employee();

  expect(employee.getId().toEqual(expect.any(Number)));
});

test('retrieves employee email', () => {
  const employee = new Employee();

  expect(employee.getEmail().toEqual(expect.any(String)));
});

test('retrieves employee role', () => {
  const employee = new Employee();

  expect(employee.getRole()).toEqual('Employee');
});