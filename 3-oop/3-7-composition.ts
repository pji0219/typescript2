{
  /*
    composition: 필요한 것들을 가져와서 조립하는 것, 
    상속 대신에 컴포지션을 선호하는게 좋다 (상속이 나쁜 것은 아니지만 상속만을 이용해서 깊이 있게 상속을 계속 계속 하면 복잡해질 수 있기 때문에)
    컴포지션을 하면 코드의 재사용성이 좋아진다.
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

  // 인터페이스를 만들어서 컴포지션을 디커플링해서 사용
  interface MilkFother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFother {
    private steamMilk(): void {
      console.log('우유를 가열하는 중 입니다...');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFother {
    private steamMilk(): void {
      console.log('고급 우유를 가열하는 중 입니다...');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFother {
    private steamMilk(): void {
      console.log('우유를 차갑게 유지하는 중 입니다...');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('설탕을 사탕에서 얻는중 입니다.');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log('설탕을 자에서 얻는 중입니다.');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  // composition으로 구현
  class CaffeLatteMachine extends CoffeeMachine {
    // beans: number = 0;
    // public readonly serialNumber: string = '';
    // private milkFother: MilkFother;

    // constructor(
    //   beans: number,
    //   serialNumber: string
    // ) {
    //   super(beans);
    //   this.serialNumber = serialNumber;
    //   this.milkFother = new CheapMilkSteamer();
    // }

    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFother: MilkFother
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFother.makeMilk(coffee);
    }
  }

  // composition으로 구현
  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number, private sugar: SugarProvider) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);

      return this.sugar.addSugar(coffee);
    }
  }

  // composition으로 구현
  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milk: MilkFother,
      private sugar: SugarProvider
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);

      return this.milk.makeMilk(sugarAdded);
    }
  }

  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const candySuger = new CandySugarMixer();

  const sweetMachine = new SweetCoffeeMaker(12, candySuger);
  const latteMachine = new CaffeLatteMachine(12, 'SS', cheapMilkMaker);
  const sweetLatteMachine = new SweetCaffeLatteMachine(
    12,
    cheapMilkMaker,
    candySuger
  );

  // const machines: CoffeeMaker[] = [
  //   new CoffeeMachine(16),
  //   new CaffeLatteMachine(16, '1'),
  //   new SweetCoffeeMaker(16),
  //   new CoffeeMachine(16),
  //   new CaffeLatteMachine(16, '1'),
  //   new SweetCoffeeMaker(16),
  // ];

  // machines.forEach((machine) => {
  //   console.log('-----------------------');
  //   console.log(machine.makeCoffee(1));
  // });
}
