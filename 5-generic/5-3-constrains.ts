interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('full time!');
  }

  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('part time!');
  }

  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// 제네릭이라도 아무 타입 다 받아 올 수 있는 것이 아니고 Employee를 구현 한 것만 가능(조건)
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const pji = new FullTimeEmployee();
const ljh = new PartTimeEmployee();
pji.workFullTime();
ljh.workPartTime();

const pjiAfterPay = payBad(pji);
const ljhAfterPay = payBad(ljh);
// pjiAfterPay.workFullTime(); 안됨

const pjiAfterPay2 = pay(pji);
const ljhAfterPay2 = pay(ljh);
pjiAfterPay2.workFullTime();

const obj = {
  name: 'pji',
  age: 34,
};

const obj2 = {
  animal: '🐰',
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, 'name')); // pji
console.log(getValue(obj, 'age')); // 34
console.log(getValue(obj2, 'animal')); // 🐰
