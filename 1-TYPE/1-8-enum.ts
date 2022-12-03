{
  /*
   Enum
   서로 관련된 여러가지 상수값들을 한곳에 모아서 정의할 수 있게 도와주는 타입
   여러가지 연관된 상수를 모아서 안전하게 타입이 보장됨
   하지만 타입스크립트에서는 enum을 웬만하면 쓰지 않는 것이 좋다.

   enum보다는 union을 사용하는 것이 더 타입이 보장되기 때문에 union을 사용하는 것이 좋다.
  */

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday = 'mon',
    Tuesday = 'tue',
    Wednesday = 'wed',
    Thursday = 'thu',
    Friday = 'fri',
    Saturday = 'sat',
    Sunday = 'sun',
  }

  console.log(Days.Monday);
  const day = Days.Saturday;
  console.log(day);

  type DaysOfWeek = 'Monday' | 'TuesDay' | 'WednesDay';
  let dayOfWeek: DaysOfWeek = 'Monday';
  dayOfWeek = 'WednesDay';
}
