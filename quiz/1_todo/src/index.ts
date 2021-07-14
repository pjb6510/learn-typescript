// type Todo = {
//   id: number;
//   title: string;
//   done: boolean;
// };

interface Todo {
  id: number;
  title: string;
  done: boolean;
};

let todoItems: Todo[]

// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): Todo[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): Todo {
  return todoItems[0];
}

function showCompleted(): Todo[] {
  return todoItems.filter((item: Todo) => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(firstTodo: Todo, secondTodo: Todo): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  addTodo(firstTodo);
  addTodo(secondTodo);
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

const item1 = {
  id: 4,
  title: "아이템 4",
  done: false,
};

const item2 = {
  id: 5,
  title: "아이템 5",
  done: true,
};

todoItems = fetchTodoItems();
addTwoTodoItems(item1, item2);
log();

/*
  타입과 인터페이스의 차이점?

  이야기를 하자면 정말 길어지기에 간단히 말씀드리자면,
  객체를 다룰 때는 인터페이스를, 그 외에는 타입을 쓰시면 어떨까해요.
  타입은 인터페이스로 선언할 수 없는 구조를 정의할 수 있습니다. 예를 들면,

  type address = string | number | boolean;
  type food = 'noodle' | 'pizza' | 'somewhat';

  이건 인터페이스로 선언이 불가능한 타입 구조입니다 :)
  그리고 인터페이스는 아래와 같이 동일한 이름으로 중복 선언해서 확장이 가능합니다.

  interface Yeran {
    name: string;
    age: number;
  }

  interface Yeran {
    thankyou: string;
  }

  const yeran: Yeran = {
    name: 'yeran',
    age: 21,
    thankyou: '예란님 감사해요 :)',
  };

  추가 읽을 거리 : https://joonsungum.github.io/post/2019-02-25-typescript-interface-and-type-alias/
*/
