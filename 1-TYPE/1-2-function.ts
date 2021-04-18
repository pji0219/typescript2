{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript ✨
  function FetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript ✨ => TypeScript: 최신 자바스크립트 문법은 타입스크립트에서도 사용 가능
  // 그리고 자바스크립트에는 아직 포함되지 않은 타입스크립트에서만 제공하는 문법도 사용가능

  // Optional parameter: 선택적으로 파라미터를 받고 싶을 때 사용(인자를 전달해도 되고 안해도 됨)
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('jongik', 'park');
  printName('jongik');
  printName('Ada', undefined);

  // Default parameter
  function printMessage(message: string = '무야호~!') {
    console.log(message);
  }
  printMessage();

  // Rest parameter: 인자를 개수 제한 없이 받아오는 파라미터
  const addNumbers = (...numbers: number[]): number => {
    return numbers.reduce((a, b) => a + b);
  };

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5));
}
