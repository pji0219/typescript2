{
  /*
    Type Inference(타입 추론)
    실제 프로젝트에서는 함수의 경우 로직이 복잡하기 때문에 타입을 명시 하는게 좋다
    다만 원시 타입 같은 경우에는 뻔하기 때문에 생략해도 된다.
  */
  let text = 'hello'; // 따로 string 타입을 명시 하지 않아도 타입스크립트가 자동으로 타입 추론을 해서 string타입으로 지정
  text = 'hi'; // 그래서 string타입만 할당 가능

  // 파라미터에 타입을 명시 하지 않으면 암묵적으로 any 타입이 되며 아래와 같이 디폴트 파라미터로 문자열을 할당 하면 문자열 타입으로 된다.
  function print(message = 'hello') {
    console.log(message);
  }
  print('hi');

  // return 값의 타입을 명시하지 않아도 타입 추론으로 number로 지정 됨
  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 1);
  console.log(result);
}
