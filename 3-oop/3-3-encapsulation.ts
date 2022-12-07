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
}
