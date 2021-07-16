// 드랍다운 내용이 정적으로 들어가 있는게 아니라,
// api로 받아서 동적으로 넣어주는 상황이라고 가정하자.

/*
  // 참고: 인터페이스에 제네릭을 선언하는 방법

  interface book<T> {
    id: T;
    title: string;
    author: string;
    number: number;
  }
*/

interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

// value: string
const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

// value: number
const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem<T>(item: DropdownItem<T>): HTMLOptionElement {
  const $option = document.createElement('option');
  $option.value = item.value.toString();
  $option.innerText = item.value.toString();
  $option.selected = item.selected;

  return $option;
}

emails.forEach((item: DropdownItem<string>) => {
  const $option = createDropdownItem<string>(item);
  const $select = document.querySelector('#email-dropdown');
  $select.append($option);
});

numberOfProducts.forEach((item: DropdownItem<number>) => {
  const $option = createDropdownItem<number>(item);
  const $select = document.querySelector('#product-dropdown');
  $select.append($option);
});

// 두 함수를 합친다면 이렇게?
function renderSelectOptions<T>(dropDownItems: DropdownItem<T>[], $select: HTMLSelectElement) {
  dropDownItems.forEach((item: DropdownItem<T>) => {
    const $option = createDropdownItem<T>(item);
    $select.append($option);
  });
}
