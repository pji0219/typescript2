// this가 호출된 문맥에 따라서 동적으로 바뀜

console.log(this); // window (글로벌이고 브라우저 환경이라서)

function simpleFunc() {
  console.log(this); // window
}

simpleFunc(); // = window.simpleFunc();

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };

  // 화살표 함수를 쓰게 되면 바인딩한 것과 같은 효과를 냄
  /* increase = () => {
    console.log(this);
  }; */
}

const counter = new Counter();
counter.increase(); // Counter

// undefined, 원래는 Counter를 카리키고 있었으나 caller라는 변수에 할당 되었기 때문에 this에 정보를 잃어버리게 됨
// let과 const로 선언된 변수는 window에 등록되어져 있지 않으므로 이 caller를 호출하는 것은 window가 아니라 그 어떤 object도 아니기 때문에
// undefined
const caller = counter.increase;

// bind를 사용하면 this 정보를 잃어버리지 않음
const caller2 = counter.increase.bind(counter);
caller();
caller2();

class Bob {}

const bob = new Bob();
bob.run = counter.increase;
bob.run();
