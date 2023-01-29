{
  // 이 함수는 숫자만 null 체크가 가능하다 그러므로 타입별로 함수를 따로 더 만들어야 하는 문제점이 있다.
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }

    return arg;
  }

  // 다른 타입도 체크가 가능하나 any를 리턴하므로 타입이 보장이 안되는 문제점이 있다.
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid agument!');
    }

    return arg;
  }

  const result = checkNotNullAnyBad(123);

  // 제네릭은 어떤 타입이든지 받을 수 있고 코딩을 할 때 즉 사용을 할 때 타입이 결정되기 때문에 타입을 보장 받을 수 있다.
  // 아래 함수는 null이 아닐 때는 어떤 타입이든지 같은 타입으로 리턴하는 함수이다.
  // 제네릭을 쓸 때는 TYPE의 약자인 T를 써준다.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid argument!');
    }

    return arg;
  }

  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
