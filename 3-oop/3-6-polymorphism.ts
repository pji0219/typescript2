{
  /*
    다형성: 다형성을 이용하면 한가지 인터페이스와 클래스로(상속 받아서) 다른 방식으로 구현한 클래스를 만들 수 있다.
  */
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('커피콩의 크기는 0보다 커야 합니다.');
      }

      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log('커피 머신을 청소하는 중 입니다...');
    }

    private grindBeans(shots: number) {
      console.log(`${shots}샷을 위해 커피콩을 갈고 있습니다.`);

      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('커피콩이 충분하지 않습니다!');
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('따듯하게 가열중 입니다.');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`${shots}샷의 커피를 내리는 중...`);

      return {
        shots,
        hasMilk: false,
        hasSugar: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk(): void {
      console.log('우유를 가열하는 중 입니다...');
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();

      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number) {
      super(beans);
    }

    private insertSugar(): void {
      console.log('설탕을 넣었습니다.');
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.insertSugar();
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  // const latteMachine = new CaffeLatteMachine(23, 'SSSS');

  // const coffee = latteMachine.makeCoffee(1);
  // console.log(coffee);
  // console.log(latteMachine.serialNumber);

  // const sweetCoffeeMachine = new SweetCoffeeMaker(23);
  // const sugarCoffee = sweetCoffeeMachine.makeCoffee(1);
  // console.log(sugarCoffee);

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];

  // 다형성의 장점은 여러 클래스가 동일한 한가지의 인터페이스를 구현 하거나 공통된 부모 클래스를 상속 받았을 때
  // 동일한 메서드를 클래스를 구분하지 않고 아래와 같이 사용할 수 있어서 유용하다.
  machines.forEach((machine) => {
    console.log('-----------------------');
    console.log(machine.makeCoffee(1));
  });
}
