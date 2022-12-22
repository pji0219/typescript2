{
  /*
    composition: 
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

  class SweetCaffeLatteMachine extends CoffeeMachine {}

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log('-----------------------');
    console.log(machine.makeCoffee(1));
  });
}
