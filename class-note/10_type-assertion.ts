/* -------------------------------- */
// 타입 단언(type assertion):
// "타입스크립트 랭귀지 서버보다 개발자가 특정 데이터의 타입을 더 정확히 알고있다."
var a;
a = 20;
a = 'a';
// 이렇게 해도 string이라고 단언해주지 않으면 a와 b는 여전히 any로 취급된다.

var b = a as string;

/* -------------------------------- */
// DOM API 조작

// const div = document.querySelector("div")
// div는 HTMLDivElement일 수도 있지만 null일 수도 있음.
// 그러므로 아래와 같이 작성한다.

const div = document.querySelector("div") as HTMLDivElement;
if (div) {
  console.log(div);
}
