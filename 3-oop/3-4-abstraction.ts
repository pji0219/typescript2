{
  /*
    abstraction(추상화): 내부의 복잡한 기능을 다 이해하지 않고 외부의 간단한 인터페이스를 통해서 사용할 수 있는 것을 말함
    모든 언어가 인터페이스를 지원하는 것이 아니기 때문에 추상화를 하는 방법에는
    캡슐화를 통해서 외부에 보여줄 것과 숨길 것을 설정하여 추상화를 하는 방법과 인터페이스를 통해 하는 방법이 있음
  */
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 의사소통을 하려면 이러한 규약을 가지고 있다라고 명시하는 계약서에 비유할 수 있다.
  // 클래스와 구별하기 위해 인터페이스 이름에 접두사로 I를 붙이는 경우가 있으며
  // 구현하는 부분인 클래스 뒤에 Ipml(implementation)를 붙이는 경우가 있다.
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // 인터페이스를 구현하는 클래스에서는 인터페이스에 규약된(명시된?) 것을 모두 구현해야 한다.
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
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
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // CoffeeMachine클래스로 타입을 지정해서 인스턴스를 생성하면 클래스 내에 있는 모든 public 메서드에 접근이 가능 하지만
  // 인터페이스를 타입으로 지정하면 인터페이스에 규정 해놓은 메서드만 접근 가능
  // const maker: CoffeeMachine = CoffeeMachine.makeMachine(1); // === const maker = new CoffeeMachine(1);

  // maker.fillCoffeeBeans(32);
  // maker.makeCoffee(2);

  // CoffeeMachine 클래스는 CoffeeMaker 인터페이스를 구현하는 클래스이기 때문에
  // CoffeeMaker 인터페이스를 타입으로 지정 가능
  // const maker2: CoffeeMaker = CoffeeMachine.makeMachine(1);

  // CoffeeMaker 인터페이스에는 fillCoffeeBeans가 없기에 사용 불가
  // 이렇게 인터페이스를 활용하여 사용자가 사용하게 할 인터페이스를 정할 수 있음
  // maker2.fillCoffeeBeans(32);
  // maker2.makeCoffee(2);

  // const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(1);
  // maker3.fillCoffeeBeans(32);
  // maker3.makeCoffee(2);
  // maker3.clean();

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker4: CoffeeMachine = CoffeeMachine.makeMachine(32);

  // 사용자는 클래스의 내부가 어떻게 생겼는지 신경 쓸 필요 없이 인터페이스에 규약된 것을 사용해서 클래스를 이용하면 됨
  const amateur = new AmateurUser(maker4);
  amateur.makeCoffee();

  const pro = new ProBarista(maker4);
  pro.makeCoffee();
}
