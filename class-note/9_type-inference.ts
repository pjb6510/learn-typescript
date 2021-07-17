// 타입 추론 기본 1
var a = 'abc';

function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

// function getB(b?: number): string
10 + '10' // '1010'

/* ---------------------------------- */
// 타입 추론 기본 2

interface Dropdown<T> {
  title: string;
  value: T;
}

var shoppingItem: Dropdown<string> = {
  title: 'hello',
  value: 'abc',
}

/* ---------------------------------- */
// 타입 추론 기본 3

interface DetailedDropdown<U> extends Dropdown<U> {
  description: string;
  tag: U;
}

var detailedItem: DetailedDropdown<string> = {
  title: 'hi',
  description: 'show me the money',
  value: 'abcd',
  tag: 'option'

  // value: 13,
  // tag: 12,
};

/* ---------------------------------- */
// Best common type

// const nums: number[]
const nums = [1, 2, 3];

// const arr: (string | number | boolean)[]
const arr = [1, 2, 'abc', true];
