// #02 
// data
const obj  = { hello: 'world' };
const key = 'hello';
const defaultValue = 'kitty';

// naive solution:
// if ( get(obj, key) !== obj[key]) {
//   throw new Error('Функция работает неверно!');
// }

// if (get(obj, '', defaultValue) !== defaultValue) {obj[key]
//   throw new Error('Функция работает неверно!');
// }

// if (get(obj, key, defaultValue) !== obj[key]) {
//   throw new Error('Функция работает неверно!');
// }


// with assert:
// import { strict as assert } from 'node:assert';

// assert.equal(get(obj, key), obj[key]);
// assert.equal(get(obj, '', defaultValue), defaultValue);
// assert.equal(get(obj, key, defaultValue), obj[key]);

// with power-assert:
import assert from 'power-assert';

const array = [1, 2, 3];
const zero = 0;
const two = 2;

// assert.equal(array.indexOf(zero) === two);


const user = {
  name: 'Madonna',
  friends: ['Kate', 'Michel'],
  email: 'madonna@example.com',
};

assert(user.name === 'Michel');
// assert.deepEqual(user.friends, ['Kate', 'Madonna']);


// closing statement
console.log('Все тесты пройдены!');
