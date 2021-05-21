/**
 * Let's make a calculator 🧮
 */
{
  // 내가 작성한 코드
  function calculate(mode: string, x: number, y: number): number | undefined {
    switch (mode) {
      case 'add':
        return x + y;
      case 'substract':
        return x - y;
      case 'multiply':
        return x * y;
      case 'divide':
        return x / y;
      case 'remainder':
        return x % y;
      default:
        return undefined;
    }
  }

  console.log(calculate('add', 1, 3)); // 4
  console.log(calculate('substract', 3, 1)); // 2
  console.log(calculate('multiply', 4, 2)); // 8
  console.log(calculate('divide', 4, 2)); // 2
  console.log(calculate('remainder', 5, 2)); // 1

  // 강사님 코드
  type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

  function calculate2(command: Command, x: number, y: number): number {
    switch (command) {
      case 'add':
        return x + y;
      case 'substract':
        return x - y;
      case 'multiply':
        return x * y;
      case 'divide':
        return x / y;
      case 'remainder':
        return x % y;
      default:
        throw new Error('unknown command');
    }
  }

  console.log(calculate2('add', 1, 3)); // 4
  console.log(calculate2('substract', 3, 1)); // 2
  console.log(calculate2('multiply', 4, 2)); // 8
  console.log(calculate2('divide', 4, 2)); // 2
  console.log(calculate2('remainder', 5, 2)); // 1
}
