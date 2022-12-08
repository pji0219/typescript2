{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  /*
    public: 특별히 작성하지 않으면 기본적으로 public으로 됨, 어디서든지 외부에서 접근 가능
    private: 어느 곳에서든 외부에서는 접근 불가
    protected: 외부에서는 접근할 수 없지만 해당 클래스를 상속 받은 클래스에서는 접근 가능
    로 다양한 레벨의 은닉을 할 수 있음
  */
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 이렇게 static을 이용해 객체를 만들 수 있는 함수를 제공 한다면
    // 생성자를 이용해서 객체를 생성하는 것을 금지하기 위해서 이다.
    // 그럴 때는 생성자를 private로 해서 접근이 불가능하게 해서 함수를 사용하도록 권장하면 된다.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('커피콩의 크기는 0보다 커야 합니다.');
      }

      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('커피콩이 충분하지 않습니다!');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);

  // 외부에서 이렇게 -라는 유효하지 않는 값으로 클래스 내부의 상태(변수)를 설정할 수 있기 때문에 캡슐화를 해야한다.
  // 즉 외부에서 보이면 안되는 설정하면 안되는 것을 캡슐화로 은닉해주어야 함
  // maker.coffeeBeans = -32

  maker.fillCoffeeBeans(32);

  class User {
    // fullName: string;

    // 원래는 firstName 또는 lastName에 재할당 한 것이 fullName에 반영이 안되는데
    // getter를 이용하면 fullName이 호출될 때 firstName 또는 lastName에 새롭게 할당한 것도 반영된다.
    // * getter와 setter는 멤버 변수처럼 사용할 수 있으면서 어떠한 계산을 해야할 때 유용하게 사용할 수 있다.
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;

    // 멤버변수에 접근 하듯이 접근해서 값을 볼 수 있음
    get age(): number {
      return this.internalAge;
    }

    // 일반 변수에는 바로 할당이 되지만 setter를 사용하면 좀 더 다양한 계산을 하면서 값을 멤버 변수에 값을 할당 가능
    set age(num: number) {
      if (num < 0) {
        throw new Error('-값은 설정할 수 없습니다.');
      }
      this.internalAge = num;
    }

    // 생성자에 이렇게 접근 제어자를 설정해두면 멤버 변수로 설정이 되고
    // this.firstName = firstName;의 의미와 같다.
    constructor(private firstName: string, private lastName: string) {
      // this.fullName = `${this.firstName} ${this.lastName}`;
    }
  }

  const user = new User('민주', '김');
  console.log(user.fullName);
  // user.firstName = '소현';
  // console.log(user.fullName); get을 사용하면 멤버 변수에 접근 하듯이 할 수 있다.
  user.age = 6;
  console.log(user.age);
}
