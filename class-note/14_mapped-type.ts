type Heroes = 'Hulk' | 'Capt' | 'Thor';
type HeroAges = { [K in Heroes]: number }
const ages: HeroAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
}

// for in 반복문 코드
// const arr = ['a', 'b', 'c'];
// for (const key in arr) {
//   console.log(arr[key]);
// }
