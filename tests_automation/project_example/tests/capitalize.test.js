import { capitalize } from '../src/capitalize.js';
// import { strict as assert } from 'node:assert'; // https://nodejs.org/api/assert.html
import assert from 'power-assert';

// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!');
// }

// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!');
// }
// console.log('Все тесты пройдены!');

assert.equal(capitalize('hello'), 'Hello');
assert.equal(capitalize(''), '');

// assert(capitalize('hello'), 'Hello');
// assert(capitalize(''), '');


console.log('Все тесты пройдены!');