{
  // 계산기 만들기
  type Command = 'add' | 'subtract' | 'multiply' | 'divide' | 'remainder';

  function calculator(command: Command, num1: number, num2: number): number {
    switch (command) {
      case 'add':
        return num1 + num2;
      case 'subtract':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        return num1 / num2;
      case 'remainder':
        return num1 % num2;
      default:
        throw new Error('unknown command');
    }
  }

  console.log(calculator('add', 1, 3));
  console.log(calculator('subtract', 1, 3));
  console.log(calculator('multiply', 1, 3));
  console.log(calculator('divide', 1, 3));
  console.log(calculator('remainder', 1, 3));
}
