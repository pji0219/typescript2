{
  /**
   * Type Alias: 새로운 타입을 자신이 정의하는 것
   */
  type Text = string;
  const name: Text = 'pji';

  // 원시타입 뿐만 아니라 객체도 정의 가능
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'pji',
    age: 7,
  };

  /**
   * String literal type
   */
  type Name = 'pji'; // Name타입은 문자열 pji이다.
  let pjiName: Name;
  pjiName = 'pji'; // 그래서 pji만 할당 가능

  type Boal = true;
  const isDog: Boal = true;
}
