//let assert = require('power-assert');
//let fooCalculator = require('../src/js/fooCalculator').default;
//let Person = require('../src/js/Person.js').Person;

import assert from 'power-assert';
import fooCalculator from '../src/js/fooCalculator';
import { Person } from '../src/js/Person.js';

describe('module fooCalculator', () => {
  describe('method multiplyBy2', () => {
    it ('multiply some values by 2', () => {
      assert(fooCalculator.multiplyBy2(0) === 0);
      assert(fooCalculator.multiplyBy2(2) === 4);
      assert(fooCalculator.multiplyBy2(3) === 6);
    });
  });
});

describe('class Person', () => {
  describe('function say', () => {
    it ('say that its name is "foo"', () => {
      let p = new Person('foo');
      assert(p.say() === "Hello, foo");
    });
    it ('say that its name is empty', () => {
      let p = new Person('');
      assert(p.say() === "Hello, ");
    });
  });
});
