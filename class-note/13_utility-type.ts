/*
  Partial<from>: 부분집합. 모든 속성을 옵션처리함.
  Pick<from, pickedProperty>: from에서 어느 속성만 사용하겠다.
  Omit<from, exceptedProperty>: from에서 어느 속성만 제외하고 사용하겠다.
*/

interface Product {
  id: string;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품정보를 가져오는 API
function fetchProducts(): Promise<Product[]> {
  return Promise.resolve([
    //..
  ]);
}

// 2. 상품정보를 표시하는 함수

// interface ProductDetail {
//   id: string;
//   name: string;
//   price: number;
// }

function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {
  //..
}

// 3. 상품정보를 업데이트하는 함수

// interface OptionalProduct {
//   id?: string;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

function updateProductDetail(targetId: string, productItem: Partial<Product>) {
  //..
}

// 4. 유틸리티 타입 구현하기 - Partial

interface UserProfile {
  userName: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   userName?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #1
type UserProfileUpdate1 = {
  userName?: UserProfile['userName'];
  email?: UserProfile['email'];
  profilePhotoUrl?: UserProfile['profilePhotoUrl'];
}

// #2 Mapped Type
// for in 처럼 반복문을 돌며 p에 속성이 할당된다고 생각하자.
type UserProfileUpdate2 = {
  [p in 'userName' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
}
type UserProfileKeys = keyof UserProfile // userName' | 'email' | 'profilePhotoUrl'

// #3 keyof
type UserProfileUpdate3 = {
  [p in keyof UserProfile]?: UserProfile[p];
}

// #4 Partial
type Subset<T> = {
  [p in keyof T]?: T[p];
}
