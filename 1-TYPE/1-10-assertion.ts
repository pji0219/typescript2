{
  /*
    Type Assertion: 어떤 타입이 리턴 되거나 어떤 타입인지 아는 경우(장담하는 경우)에 타입을 강요할 때 사용
    별로 사용하지 않는 것이 좋다.
    되도록이면 사용 하는 것을 피하는 것이 좋은데 타입스크립트로 개발할 때 타입이 없는 자바스크립트와 연동 되는 경우가 있기 때문에
    불가피하게 써야 되는 경우가 있다.
    Type Assertion은 타입을 100% 장담할 수 있을 때만 사용해야 된다.
  */
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  // 두가지 방법 중 하나를 선택해서 사용하면 됨
  console.log((result as string).length);
  console.log((<string>result).length);

  /* const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 에러😱 */

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 에러😱 !는 값이 있다는 것을 장담할 때 사용
}
