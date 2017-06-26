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
  describe('function greet', () => {
    it ('greet using its name', () => {
      let p = new Person('foo');
      assert(p.greet() === "私は、foo と言います。");
    });
    it ('greet using empty name', () => {
      let p = new Person('');
      assert(p.greet() === "私は、 と言います。");
    });
  });
});
