{
  /*  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  function Add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // code...
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript ✨
  function fetchNum(id: string): Promise<number> {
    // code...
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JS, TS 둘다 사용 가능한 것
  // Optional parameter: 인자를 전달해도 되고 안해도 되는 파라미터
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // 전달하지 않으면 undefined
  }
  printName('종익', '박');
  printName('종익');
  printName('종익', undefined);

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage(); */

  // Rest parameter: 여러개의 인자를 받아 올 때 편리하게 쓸 수 있는 문법
  function addNums(...nums: number[]): number {
    return nums.reduce((a, b) => a + b);
  }
  console.log(addNums(1, 2, 3, 4, 5, 6, 7));
}
