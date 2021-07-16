/*
  function logText(text) {
    console.log(text);
    return text;
  }

  // 타입을 명시 하지 않았으므로 any.

  logText('hello world'); // return 'hello world'
  logText(10); // return 10
  logText(true); // return true
*/


/*
  // 제네릭: 호출되는 시점에 파라미터에 들어올 인자의 타입이 평가됨.

  function logText<T>(text: T): T {
    console.log(text);
    return text;
  }

  logText<string>('hello World'); // string을 인자로 넘겨준다고 명시적으로 표현.
 */

/*
  // 문제 1: 같은 내용의 로직을 다른 타입으로 받기 위해, 두 함수를 만들어야함.

  function logText(text: string) {
    console.log(text);
    return text;
  }

  function logNumber(num: number) {
    console.log(num);
    return num;
  }

  logText('hello').slice(3);
  logNumber(1651235).toLocaleString();
*/

/*
  // → 그렇다면 유니온 타입 사용하면 되지 않나?

  function logText(text: string | number) {
    console.log(text);

    // string과 number의 교집합에 해당하는 속성에만 접근할 수 있음.
    // text.toLocaleString
    // text.toString
    // text.valueOf

    return text;
  }

  const a = logText('a');
  // a.split('') // error: number에는 split이 없다!
*/

// 그러므로 아래와 같이, any나 유니온 타입 대신 제네릭을 활용하면,
// 타입을 명시해줄 수도 있으며, 여러 타입을 인자로 넘길 수도 있다.
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abc');
str.split('');

const login = logText<boolean>(true);

// -------------------------------------------
// 인터페이스에 제네릭을 선언하는 방법
interface book<T> {
  id: T;
  title: string;
  author: string;
  number: number;
}

// -------------------------------------------
// 제네릭의 타입 제한 1: 배열로 선언
function logArrayLength<T>(arr: T[]): number {
  console.log(arr.length);
  return arr.length;
}

logArrayLength<string>(['show', 'me', 'the', 'money']);
logArrayLength<string>('power overwhelming operation cwal'.split(''));

// -------------------------------------------
// 제네릭의 타입 제한 2: 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logLength<T extends LengthType>(text: T): number {
  console.log(text.length);
  return text.length;
}

// logLength(10); // error: 숫자에는 length가 없음.
logLength({ length: 10 });
logLength('food for thought');
logLength([1, 2, 3, 4, 5]);

// -------------------------------------------
// 제네릭의 타입 제한 3: keyof

interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption("name");
