// 모듈화를 하지 않으면 기본적으로 글로벌 스코프로 된다.
export default function add(a, b) {
  return a + b;
}

export function print() {
  console.log('Hello, World!');
}
