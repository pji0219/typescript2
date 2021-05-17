{
  /**
   * Enum: 여러가지의 관련된 상수 값들을 한곳에 모아서 정의할 수 있게 도와주는 타입
   */

  // 자바스크립트에는 아래처럼 관련성이 있는것들을 묶을 수 있는 타입이 존재하지 않는다.
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  // 그래서 자바스크립트에서는 enum에 최대한 가깝게 표현할 수 있는 방법으로 아래와 같이 한다.
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday, // 0
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday, // 5
    Sunday, // 6
  }
  console.log(Days.Sunday);
  let day = Days.Saturday;
  day = Days.Tuesday;
  day = 10; // enum 안에 10은 없는데 할당이 가능하다. 이렇게 타입이 보장이 안되는 문제가 있기에 유니온 타입으로 하는것이 낫다.
  console.log(day);

  type DaysOfWeek = 'Moday' | 'Tuesday' | 'Wednesday';
  let dayOfWeek: DaysOfWeek = 'Moday';
  // dayOfWeek = 'park'; park는 없기에 할당 불가, 타입이 보장됨
}
