{
  /**
   * Type Alias: 새로운 타입을 내가 정의할 수 있는 것 (타입의 이름을 내가 새롭게 정의)
   */
  type Text = string; // Text라는 새로운 타입은 문자열을 말한다라는 뜻
  const name: Text = 'park';
  // 윈시타입 뿐만 아니라 객체도 가능
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    // 타입에서 정해진 키와 밸류만 가능
    // animal: 'dog' 이런식으로 정해지지 않은 것은 불가
    name: 'park',
    age: 33,
  };

  /**
   * String Literal Types
   */
  type Name = 'name'; // Name이라는 타입은 문자열 name을 쓴다 라는 뜻
  let parkName: Name;
  parkName = 'name'; // 문자열 name만 할당 가능 (타입이 Name이기 떄문)
}
