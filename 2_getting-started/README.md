## getting-started
### ts파일 컴파일
```
$ npm i typescript -g // 타입스크립트 컴파일러 글로벌 설치

$ tsc index.ts // ts파일 컴파일
```
### 타입스크립트 설정 파일
- tsconfig.json 파일 생성
- 옵션 설정 (https://www.typescriptlang.org/tsconfig)

example
```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "noImplicityAny": true
  }
}
```

### 타입스크립트 플레이그라운드
https://www.typescriptlang.org/play