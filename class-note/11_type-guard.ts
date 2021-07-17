interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making' };
}
const tony = introduce();
// console.log(tony.skill); // error: union타입은 공통된 속성에만 접근할 수 있다.

if ((tony as Developer).skill) {
  console.log((tony as Developer).skill);
} else if ((tony as Person).age) {
  console.log((tony as Person).age);
}
// 구현은 되었지만, 가독성이 떨어진다.

function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
// isDeveloper 함수를 거쳐, tony의 타입에 따라 각 속성에 접근 가능하다.
