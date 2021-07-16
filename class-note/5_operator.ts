// function logMessage(value: string) {
//   console.log(value);
// }

// logMessage('hello');
// logMessage(100); // error

// 유니온 타입: '|' 연산자를 이용하여 여러 타입을 함께 받을 수 있다.
// 이후 if문으로 타입을 하나씩 필터링 하면, 자동완성으로 타입속성에 접근 가능.
let seobeen: string | number | boolean;

function logMessage(value: string | number) {
  if (typeof value === "number") {
    console.log(value.toLocaleString());
  } else if (typeof value === "string") {
    console.log(value.toLocaleLowerCase());
  }

  throw new TypeError("value must be string or number");
}
logMessage('hello');
logMessage(100);

// 유니온 타입을 받으면 공통된 속성에만 접근할 수 있다.
interface Develper {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}
function askSomeone1(someone: Develper | Person) {
  someone.name;
  // someone.skill; // error
  // someone.age; // error
}
askSomeone1({ name: '어흥', skill: '웹 개발' });
askSomeone1({ name: '야옹', age: 3 });

// 인터섹션 타입 : '&' 연산자를 이용하여 두 인터페이스 모두 충족하는 타입임을 서술.
function askSomeone2(someone: Develper & Person) {
  someone.name;
  someone.skill;
  someone.age;
  // someone은 name, skill, age 모두 갖고 있어야 함.
}
// askSomeone2({ name: '야옹', age: 3 }); // error: skill이 없음.
askSomeone2({ name: '야옹', age: 3, skill: "츄르 안흘리고 먹기" }); // error
