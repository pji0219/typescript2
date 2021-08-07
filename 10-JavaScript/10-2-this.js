// 자바스크립트에서 this는 호출한 사람, 호출한 사람의 문맥을 나타낸다.
// 디른 프로그래밍 언어에서는 this는 클래스 자신을 가리킴 그래서 인스턴스를 만들면 this는 인스턴스를 가리키게 된다.

console.log(this);
// 그래서 아무것도 하지 않고 호출하면 브라우저상에서 window가 글로벌 객체이기 때문에 this는 window를 가리키게 됨

function simpleFunc() {
  console.log(this);
}
simpleFunc();
// 글로벌에서 함수를 호츨하는 것은 윈도우에 있는 것을 호출하는 것과 같다
// 그래서 this는 window를 가리키게 됨

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  }
}
const counter = new Counter();
counter.increase();
// this가 Counter 클래스를 가리킨다.

const func = counter.increase;