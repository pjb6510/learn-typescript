// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
}

const seho: Person = {
  name: '세호',
  age: 30
};

type MyString = string;
const str: MyString = 'hello';

type Todo = {
  id: string;
  title: string;
  done: boolean;
};
function getTodo(todo: Todo) {}

/*
  타입과 인터페이스의 가장 큰 차이는 확장 가능 / 불가능 여부.
  출처 : https://yceffort.kr/2021/03/typescript-interface-vs-type

  interface Window {
    title: string
  }

  interface Window {
    ts: TypeScriptAPI
  }

  이건 가능.

  type Window = {
    title: string
  }

  type Window = {
    ts: TypeScriptAPI
  }

  이건 불가능.
*/