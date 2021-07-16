class Person {
  public name: string; // 언제나 접근 가능. 명시하지 않는다면 기본적으로 모두 public.
  private age: number; // 내부적으로만 접근 가능.
  readonly id: string; // 초기화 할 때 빼고는 읽기만 가능. 단 처음 선언될 때 반드시 초기화가 이루어져야함. const랑 비슷.
  protected major: string; // private와 거의 동일. 다른 점은, 자식 클래스가 접근 가능하다는 점. // constructor에 걸려 있으면, 인스턴스화는 불가능하지만 확장은 가능한 클래스.

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const jeongbeen = new Person("정빈", 28);

// 파라미터 프로퍼티: 접근 제한자가 생성자 파라미터에 선언되면, 암묵적으로 속성이 선언되고 초기화가 수행된다.
class Person2 {
  constructor(
    readonly name: string,
    private age: number,
  ) {}

  introduce() {
    console.log(`Hi, My name is ${this.name}`);
  }
}

// 추상 클래스: 확장만을 위해 존재하는 클래스
abstract class Animal {
  constructor (
    readonly species: string
  ) {}

  abstract makeSound()
}

// const someAnimal = new Animal(); // error: 추상 클래스의 인스턴스는 만들 수 없음.
class Cat extends Animal {
  name: string;

  constructor(name) {
    super("Cat");
    this.name = name;
  }

  makeSound(): void {
    console.log("meow");
  } // makeSound를 구현하지 않으면 에러.
}

const elizabeth = new Cat("elizabeth");
elizabeth.makeSound();
