// 자바스크립트에서 모든 객체는 Object라는 프로토타입을 상속 받는다.
const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString()); // 그래서 프로토타입 안에 있는 이러한 함수를 사용 가능
console.log(x.__proto__ === y.__proto__); // true, x와 y는 동일한 Object라는 프로토타입을 상속 받기 때문에

const array = []; // 배열은 array라는 프로토타입을 상속 받고 array 프로토타입은 또 Object라는 프로토타입을 상속 받는다.
console.log(array);
