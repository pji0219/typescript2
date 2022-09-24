{
  // JavaScript

  /* old: var 💩
    호이스팅과 예상치 못한 문제가 발생할 수 있기 때문에 쓰면 좋지 않다.
    특히 타입스크립트 파일 위에서 코딩을 할 때는 이 var가 있다는 거 자체를 잊어버려야 한다.
  
    let 키워드를 이용해도 타입스크립트 코드는 어짜피 자바스크립트 코드로 변환이 되고 우리가
    타겟 버전도 선택할 수 있기 때문에 이 let을 써도 브라우저 호환성 문제는 전혀 걱정할 필요가 없다.
    
    그리고 자바스크립트로만 프로젝트를 하더라도 많은 프로젝트에서 바벨을 이용해서 자바스크립트 최신 버전을
    낮은 버전으로 변환해서 배포를 하고 있기 때문에 이런 예전 관습, 오래된 것들은 쓰지 않아도 된다.

    그래서 항상 좋은 관례, 좋은 방식을 이용해서 코딩을 배우고 해나가는 것이 정말 중요하다.
  */
  var age = 5;
  age = 1;

  // let ( es6 )
  let name = 'hello';
  name = 'hi';
  // const
}

// 데이터 타입
{
  /**
   * JavaScript
   * Primitive(원시): number, string, boolean, bigint, symbol, null, undefined
   한가지의 데이터를 담을 수 있는 타입들

   * Object: function, array .....
   원시 타입 그 외 모든 것
   조금 더 복잡한 데이터를 담을 수 있는 타입들
  */

  // 타입스크립트
  // number
  // const num:number = 'd'; 숫자 타입에는 문자열 타입을 할당할 수 없다.
  const num: number = 7;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = true;

  // undefined: 값이 있는지 없는지 결정이 되지 않은 상태
  let name: undefined; // 💩 undefined만 할당 가능하기 때문에 이렇게 선언하면 안된다.
  let age: number | undefined; // 이런식으로 숫자 또는 undefined를 할당 가능하게 해야한다.
  // 이 변수에는 숫자가 들어 있을 수도 있고 값이 아직 초기화 되지 않을 수도 있는 옵셔널 타입일때 이런식으로 많이 선언해준다.

  // 예: 무언가를 찾았다면 숫자를 못 찾았으면 undefined를 리턴하는 함수
  function find(): number | undefined {
    return 1;
  }

  // null: 아무것도 없는 상태
  let person: null; // 💩
  let person2: string | null;

  // 보통 undefined를 많이 이용한다.
  // 물론 값이 있거나 없다는걸 나타낼때는 문맥상 null을 이용하는 것이 맞을수가 있다.

  /* unknown: 어떤 데이터 타입이 담길지 알수 없는 상태 💩
    그래서 가능하면 쓰지 않는 것이 좋다.
    그런데 왜 이러한 것이 있냐하면 바로 타입스크립트는 타입이 없는 자바스크립트와 연동해서 쓸 수 있기 
    때문이다.
    타입스크립트에서 자바스크립트 라이브러리를 이용하는 경우에 자바스크립트에서 리턴하는 타입을 모를 수가 있다
    그럴때 unknown을 쓸 수가 있는데 이제 이런 부분도 가능하면 구체적으로 타입을 지정해서 쓰는 것이 좋고 웬만하면 쓰지 않는 것이 좋다.
  */
  let notSure: unknown = 0;
  notSure = 'hello';
  notSure = true;

  /* any: 어떤 타입이든 할당 가능 💩
    이것도 가능하면 절대 쓰지 않는 것이 좋다.

    unknown과 any는 정말 불가피할 때 어떻게 좀 타입을 더할 수 있는 방법이 정말 없을 때
    그럴 때 써야 한다.
  */
  let anything: any = 0;
  anything = 'hello';
  anything = true;

  // void
  // 함수에서 아무것도 리턴하지 않으면 void 타입이 됨
  function print(): void {
    console.log('hello');
  }

  // never: 리턴하지 않는 함수에서 씀 그래서 보통 에러에 대한 함수에서 씀
  // throwError라는 것은 어플리케이션에서 전혀 예상치 못한 에러 또는 핸들링 할 수 없는 에러가 발생 했을 때
  // 호출할 수 있는 함수
  // 발생한 에러 메세지를 서버로 보내서 로그를 남기고 에러를 던짐
  // 그러고 나면 에러를 던지니깐 어플이 죽게 됨
  // never 타입은 함수에서 절대 리턴 되지 않는 경우에 그것을 명시하기 위해서 쓰임
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
  }

  // object: 어떤 타입의 데이터든 담을 수 있다. (원시 타입을 제외한 모든 오브젝트 타입을 할당할 수 있다.)
  let obj: object; // 💩 가능하면 오브젝트도 어떤 타입인지를 조금 더 명시해서 작성하는 것이 좋다.
  // 이 함수에는 어떠한 object도 전달할 수가 있다.
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'park' });
  acceptSomeObject({ age: 33 });
}
