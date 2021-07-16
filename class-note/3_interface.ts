/*
  인터페이스:
    데이터의 형식을 정의하여,
    함수에 들어오는 인자나
    변수에 할당되는 데이터가
    형식을 잘 따르는지 확인할 수 있게 한다.

  대표적으로, api를 호출하여 데이터를 가져올 때,
  api의 스펙, 데이터의 형식 등을 인터페이스로 정의해두고 사용하면 아주 유용함.
*/

interface User {
  age: number;
  name: string;
}

//------------------------------------------
// 변수에 인터페이스 활용
const sangjin: User = {
  age: 29,
  name: "상진",
};

//------------------------------------------
// 함수에 인터페이스 활용
function getUser(user: User): void {
  console.log(user);
}

const capt = {
  name: "캡틴",
  age: 100,
}

getUser(capt);

//------------------------------------------
// 함수의 스펙(구조)에 인터페이스를 활용
interface MultiplyFunction {
  (a: number, b: number): number;
}

let multiply: MultiplyFunction = (a: number, b: number): number => a * b;

//------------------------------------------
// 인덱싱
interface StringArray {
  [index: number]: string;
}

const arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10; // error

//------------------------------------------
// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.fs$/,
};

Object.keys(obj).forEach((val, i) => {
  console.log(val, i);
  // val: string, i: number로 자동추론 되어있음.
});

//------------------------------------------
// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

const captain: Developer = {
  name: "캡틴",
  age: 100,
  language: "typescript"
};
