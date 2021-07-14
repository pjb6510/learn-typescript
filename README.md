# learn-typescript

[인프런 타입스크립트 입문 - 기초부터 실전까지 - 장기효](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8)
[github](https://github.com/joshua1988/learn-typescript)

## why-ts
- 에러의 사전 방지: 함수의 인자, 반환값의 타입 또는 객체의 속성별 타입 등을 정의하여, 사전에 에러를 방지할 수 있음.
- 자동 완성 기능: 타입이나 타입 정의에 의한 객체속성 등이 사전에 결정되어 있으므로, 객체 참조시 속성에 접근하거나 특정 타입의 프로토타입 메소드들을 사용할 때 자동완성을 사용할 수 있음.
- 이는 js에서 JSDoc을 이용하여 타입스크립트 비슷한 효과를 낼 수도 있음.

## getting-started
### ts파일 컴파일
```
$ npm i typescript -g // 타입스크립트 컴파일러 글로벌 설치

$ tsc index.ts // ts파일 컴파일
```
### 타입스크립트 설정 파일
- tsconfig.json 파일 생성
- 옵션 설정 (https://www.typescriptlang.org/tsconfig)

example
```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "noImplicityAny": true
  }
}
```

### 타입스크립트 플레이그라운드
https://www.typescriptlang.org/play

## 타입
### 기본 타입
```ts
// 문자
const str: string = "hello world";

// 숫자
const num: number = 123;

// 배열
const arr: Array<number> = [1, 2, 3];
const heroes : Array<string> = ["Capt", "Thor", "Hulk"];
const items: number[] = [1, 2, 3];

// 튜플: 모든 인덱스의 타입이 정의되어 있는 배열.
const address: [string, number] = ["gangnam", 10];

// 객체
const obj: object = {};
const person1: object = {
  name: "Jason",
  age: 28,
};
const person2: { name: string, age: number } = {
  name: "Eli",
  age: 3,
};

// 불린
let isLoading: boolean = true;
```

### 함수 타입
```ts
// 함수의 파라미터 타입 정의
function add(a: number, b: number) {
  return a + b;
}

// 함수의 반환 값 타입 정의
function getTen(): number {
  return 10;
}

// 함수 타입 정의
function sumTwoNumber(a: number, b: number): number {
  return a + b;
}

// 함수의 옵셔널 파라미터
// b파라미터에는 인자를 넘겨도 되고 넘기지 않아도 됨.
function log(a: string, b?: string): void {
  console.log(a, b);
}

// Rest 파라미터
function sum(...number: number[]): number {
  return number.reduce((a, b) => a + b);
}
```
