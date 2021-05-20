{
  /**
   * Type Assertions 💩
   * 타입을 강요할 때 이것을 써야하는데 쓰는 것은 썩 좋지가 않다.
   * 하지만 타입스크립트는 우리가 타입이 없는 자바스크립트와 함께 연동
   * 되는 경우가 있기 때문에 불가피하게 써야되는 경우가 있다.
   */

  // 자바스크립트 코드는 아래처럼 문자열을 리턴하지만 타입이 없기에 애니타입을 리턴한다고 명시될 수 밖에 없다.
  function jsStrFunc(): any {
    return 'hello';
  }

  const result = jsStrFunc();
  // result.length 그래서 타입스크립트에서는 문자열의 길이를 구하는 API를 사용할 수가 없다.

  const res = (result as string).length; // 이렇게 하면 result 변수를 문자열 타입처럼 사용할 수 있다.
  const res1 = (<string>result).length; // as키워드 말고 이렇게도 사용할 수 있다.
  console.log(res);

  function jsStrFunc2(): any {
    return 1;
  }

  /* 문제점으로는 위 함수와 같이 실제로는 숫자를 리턴하는데 아래처럼 문자열로 지정해도 코드 실행전에 에러가 발생하지 않고
    프로그램이 실행되면 프로그램이 죽지는 않지만 그제서야 undefined가 나오기 때문에 정말로 타입을 확실할 때만 사용해야한다.
  */

  const result2 = jsStrFunc2();

  const res2 = (result2 as string).length;
  console.log(res2); // undefined

  // wrong 변수는 배열이 아닌데 실행전 까지는 에러가 안뜬다.
  const wrong: any = 5;
  const arr = (wrong as Array<number>).push(1);
  // console.log(arr); 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const number = findNumbers();

  // !는 값이 있다고 확신 한다는 것
  number!.push(2); // 😱
}
