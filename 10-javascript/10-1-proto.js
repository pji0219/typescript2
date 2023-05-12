// 자바스크립트에서 모든 객체는 Object라는 프로토타입을 상속 받는다.
// 프로토타입은 자바스크립트에서 상속을 하기 위한, 코드를 재사용하기 위해 만들어진 것이다.
const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString()); // 그래서 프로토타입 안에 있는 이러한 함수를 사용 가능
console.log(x.__proto__ === y.__proto__); // true, x와 y는 동일한 Object라는 프로토타입을 상속 받기 때문에

const array = []; // 배열은 array라는 프로토타입을 상속 받고 array 프로토타입은 또 Object라는 프로토타입을 상속 받는다.
console.log(array);

console.clear();

// 생성자 함수, Object 프로토타입 상속
function CoffeeMachine(beans) {
  this.beans = beans;

  // 만들어지는 객체(인스턴스)마다 가지고 있게 되기 때문에 instance member level이라고 부른다.
  /* this.makeCoffee = (shots) => {
    console.log('making coffee');
  }; */
}

// 이렇게 하면 instance member level이라서 객체마다 가지고 있는 함수를 proto type에서 가지고 있게 된다.
// 이를 proto type level이라고 한다.
CoffeeMachine.prototype.makeCoffee = () => {
  console.log('making coffee');
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

// CoffeeMachine을 상속하게 되고 proto type level에 있는 makeCoffee함수를 사용할 수 있게 된다.
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
