{
  // Array
  // 두가지 방식중 하나로 하면 됨
  const fruits: string[] = ['🍎', '🍌'];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {
    /* readonly를 쓰면 읽기만 가능하고 값을 변경하거나 추가 불가
      그리고 readonly를 사용할 때는 Array<string> 방식은 아직 허용이 안됨
    */
  }

  /* Tuple: 배열은 배열인데 서로 다른 타입을 함께 가질수 있는 배열
    튜플을 사용하는 것을 권장하지 않음
    튜플을 사용하는 곳에는 interface, type, alias, class로 대체해서 사용하는 것이 좋다.
  */
  let student: [string, number];
  student = ['name', 2];
  student[0]; // name
  student[1]; // 2
}
