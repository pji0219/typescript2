{
  // Array
  const fruit: string[] = ['🍊', '🍌'];
  // 또는
  const scores: Array<number> = [1, 2, 3];

  // readonly를 붙이면 배열 안의 데이터 변경 불가능
  function printArray(fruit: readonly string[]) {}

  /* 
    Tuple: 서로 다른 타입을 가질 수 있는 배열
    Tuple을 사용하는 것은 권장되지 않는다 왜냐하면 값에 접근할 때 인덱스를 사용하기 때문에 가독성이 떨어지기 때문이다.
    interface, type alias, class를 사용하는 것을 권장 
  */
  let student: [string, number]; // 문자타입 1, 숫자1 총 2개만 허용 총3개 이상은 X
  student = ['name', 20];

  // 배열과 똑같이 접근 가능
  student[0]; // name
  student[1]; // 7

  // 인덱스로 하는 것을 피할 수 있는 한가지 방법은 구조 분해 할당을 이용하는 것
  const [name, age] = student;
}
