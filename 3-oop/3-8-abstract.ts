{
  /*
    absctract: 이 키워드를 사용해서 추상 클래스를 만들어주면 자식 클래스에서 오버라이딩 하지 않고 자식 클래스마다 같은 메서드를
    다르게 구현 가능
  */
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  /* 
    abstract를 사용해 추상 클래스로 해주면 인스턴스를 만들 수 없다(이 클래스를 상속 받는 자식 클래스에서 인스턴스를 생성해야 됨).
    추상 클래스에서 자식에서 공통적으로 사용해야하는 메서드들이 있다면 여기서 구현하면 되고 자식마다 달라져야하는 메서드는 아래와 같이
    메서드에도 abstract를 써주면 된다.
  */
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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

    /* 
      abstract클래스에서는 이 클래스를 상속 받을 자식 클래스 마다 달라질 수 있는 행동(메서드)이 있다면 abstact 키워드를 붙일 수 있다.
      자식 클래스에서만 접근 가능하고 외부에서는 직접적으로 접근 못하게 하기 위해 protected 키워드를 사용해준다.
      자식마다 로직을 다르게 구현해야 되기 때문에 코드는 구현하지 않는다.
    */
    protected abstract extract(shots: number): CoffeeCup;

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

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  // constructor의 파라미터가 부모와 같으면 생략해도 됨
  class SweetCoffeeMaker extends CoffeeMachine {
    private insertSugar(): void {
      console.log('설탕을 넣었습니다.');
    }

    protected extract(shots: number): CoffeeCup {
      this.insertSugar();

      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log('-----------------------');
    console.log(machine.makeCoffee(1));
  });
}
