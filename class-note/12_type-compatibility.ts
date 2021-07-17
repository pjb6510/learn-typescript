// 타입 호완성

/*---------------------------------------- */
// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

var developer: Developer;
var person: Person;

// developer = person; // error: property skill is missing
person = developer;

// 추상적 = 구체적 // 가능: 소크라테스는 사람이다.: 사람 = 소크라테스
// 구체적 = 추상적 // 불가능: 사람은 소크라테스다.: 소크라테스 = 사람?

/*---------------------------------------- */
// 함수
var add = (a: number) => {}
var sum = (a: number, b: number) => {}

// add = sum; // error
sum = add;

// 불가능: 파라미터가 a만 있는 함수에 파라미터가 a, b 모두 있는 함수를 할당하려 함.
// 가능: 파라미터가 a, b 모두 있는 함수에 파라미터가 a 하나인 함수를 할당하려 함.

/*---------------------------------------- */
// 제네릭
interface Empty<T> {
  // ..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

// notEmpty1 = notEmpty2; // error
// notEmpty2 = notEmpty1; // error
