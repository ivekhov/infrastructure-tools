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


// 04 power-assert

// 'right'
// right1: (items, value, fromIndex = 0) => items.indexOf(value, fromIndex)
assert(indexOf(tests[0], 2) === _.indexOf(tests[0], 2)); // equality is true

// 'wrong1'
// wrong1: (items, value, fromIndex = 1) => items.indexOf(value, fromIndex),

// цель wrong1 - проверить, что при замене аргументе индекса на другое
// значение (а именно, если в функцию подставить поиск с 1 индекса, то 
// функция продолжит работать корректно
assert(indexOf([1, 2, 1, 2], 1) === 0);


// "wrong2"
// wrong2: (items, value, fromIndex) => {
//   const index = items.indexOf(value, fromIndex);
//   return index === -1 ? 0 : index;
// },
// цель - проверить случай, когда элемента нет в массиве
assert(indexOf([1, 2, 1, 2, 4, 10, 41, 666, 999], 322) === -1);

// 'wrong3' - проверяет кейс, если стартовать не с первого вхождения элемента
// wrong3: (items, value) => items.indexOf(value)
assert(indexOf([999, 1, 2, 1, 2, 4, 10, 41, 666, 999], 2, 3)  === 4);

// 'wrong4' - проверяет кейс нахождения элемента по последнему индексу
// wrong4: (items, value) => _.lastIndexOf(items, value),
assert(indexOf([1, 8, 9, 3, 9, 43], 43) === 5);

