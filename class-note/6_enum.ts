// 숫자형 이넘: 별도의 값을 지정하지 않으면 전부 숫자형 이넘으로 취급한다.
enum Shoes {
  Nike,
  Adidas
}

console.log(Shoes.Nike) // 0
console.log(Shoes[0]) // 'Nike'

// 문자형 이넘
enum Language {
  javascript = '자바스크립트',
  typescript = '타입스크립트',
  swift = '스위프트',
  python = '파이썬',
}

console.log(Language.javascript) // '자바스크립트'

// 예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer): void {
  if (answer === Answer.Yes) {
    console.log('정답입니다.');
  } else if (answer === Answer.No) {
    console.log('오답입니다.');
  }
}

askQuestion(Answer.Yes);
// askQuestion('Y'); // error
