{
  // intersection Type: and의 의미와 같다.
  // 다양한 타입들을 하나로 묶어서 선언할 수가 있다.
  type Student = {
    name: string;
    score: string;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  // 위에 선언한 두 타입을 모두 만족해야 한다.
  internWork({
    name: 'pji',
    score: '100',
    employeeId: 1,
    work: () => {},
  });
}
