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

function pay<T>(employee: T): T {
  return employee;
}

const pji = new FullTimeEmployee();
const ljh = new PartTimeEmployee();
pji.workFullTime();
ljh.workPartTime();

const pjiAfterPay = payBad(pji);
const ljhAfterPay = payBad(ljh);
// pjiAfterPay.workFullTime(); 안됨
