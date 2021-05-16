{
  /**
   * Intersection Types: AND
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  // 인터섹션 타입을 활용하면 다양한 타입을 묶어서 선언할 수 있다.
  internWork({
    name: 'park',
    score: 100,
    empolyeeId: 123,
    work: () => {},
  });
}
