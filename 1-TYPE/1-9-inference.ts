/**
 * Type Inference (타입 유추)
 */

let text = 'hello'; // 선언함과 동시에 문자열을 할당했기에 타입스크립트에서 문자열이라고 타입을 유추할 수가 있다.
// 이처럼 타입이 뻔한 경우에는 생략해서 작성하는 것도 괜찮다.

// 함수에서도 마찬가지
function print(message = 'hello') {
  console.log(message);
}

function add(x: number, y: number) {
  return x + y;
}
const result = add(1, 2); // 변수에 할당된 함수가 숫자를 인자로 받아오는 함수라서 result도 자동적으로 숫자 타입으로 됨
