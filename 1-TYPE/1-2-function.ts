{
  // JavaScript π©
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript β¨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript π©
  function jsFetchNum(id) {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript β¨
  function FetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript β¨ => TypeScript: μ΅μ  μλ°μ€ν¬λ¦½νΈ λ¬Έλ²μ νμμ€ν¬λ¦½νΈμμλ μ¬μ© κ°λ₯
  // κ·Έλ¦¬κ³  μλ°μ€ν¬λ¦½νΈμλ μμ§ ν¬ν¨λμ§ μμ νμμ€ν¬λ¦½νΈμμλ§ μ κ³΅νλ λ¬Έλ²λ μ¬μ©κ°λ₯

  // Optional parameter: μ νμ μΌλ‘ νλΌλ―Έν°λ₯Ό λ°κ³  μΆμ λ μ¬μ©(μΈμλ₯Ό μ λ¬ν΄λ λκ³  μν΄λ λ¨)
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('jongik', 'park');
  printName('jongik');
  printName('Ada', undefined);

  // Default parameter
  function printMessage(message: string = 'λ¬΄μΌνΈ~!') {
    console.log(message);
  }
  printMessage();

  // Rest parameter: μΈμλ₯Ό κ°μ μ ν μμ΄ λ°μμ€λ νλΌλ―Έν°
  const addNumbers = (...numbers: number[]): number => {
    return numbers.reduce((a, b) => a + b);
  };

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5));
}
