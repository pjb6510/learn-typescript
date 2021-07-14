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
