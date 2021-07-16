const x = {}
const y = {}
console.log(x);
console.log(y);
console.log(x.___proto___ === y.___proto___); // true
// 객체를 브라우저 콘솔창에 출력해보면 proto가 있는 것을 볼 수 있는데
// 자바스크립트의 모든 객체는 오브젝트라는 proto를 상속 받는다.
// 이 proto를 열어보면 객체에서 쓸 수 있는 함수들이 들어있다.

const array = [];
console.log(array);
// 배열도 콘솔창에 출력해보면 array라는 proto가 있는 것을 볼 수 있는데
// 그것을 열어보면 배열 내장함수들이 들어 있고 object proto도 가지고 있다.
// 그래서 결론은 배열은 array라는 프로토를 상속 받고 이 array 프로토는 오브젝트 프로토를 상속 받는다.
// 그러므로 자바스크립트에 있는 모든 객체는 오브젝트를 상속 받는 것이다.

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  // 인스턴스 멤버 레벨 : 인스턴스를 만들 때 마다 공통적으로 이 함수를 가지게 됨
  // this.makeCoffee = (shots) => {
  //   console.log('making... ☕');
  // };
}

// 프로토타입 멤버 레벨
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log('making... ☕');
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);
// 콘솔창에 출력해보면 속성이 들어 있고 프로토가 있는 것을 볼 수 있다
// 그것을 열어보면 makecoffee 함수를 가지고 있고 이 프로토는 결국은 오브젝트 프로토를 상속 받는다.
// 결론은 machine 인스턴스는 CoffeeMachine을 상속 받고 있고 CoffeeMachine은 오브젝트를 상속 받는다.

function LatteMachine(milk) {
  this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype); // 라떼 머신의 프로토타입을 커피머신의 프로토타입과 연결

const lattemachine = new LatteMachine('바나나 우유');
console.log(lattemachine);
// 콘솔창에 출력해보면 결론적으로 라떼머신은 커피머신을 상속 받고 커피머신은 오브젝트를 상속 받는다.
LatteMachine.makeCoffee(); // 그래서 커피머신에 있는 makeCoffee 함수 사용 가능

/*  프로토 타입은 자바스크립트에서 객체 지향 프로그래밍 상속을 하기 위해서 쓰이는 것
    그리고 코드를 재사용하기 위해 만들어진 것이라고 이해하면 된다.
*/