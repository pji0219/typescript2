{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level로 지정, 반복적으로 사용해야 되기 때문에 객체에 만들지 않고 클래스 자체에 만듦
    // 그렇지 않으면 인스턴스마다 들어가기 때문에 메모리 낭비가 옴
    coffeeBeans: number = 0; // instance(object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots: number): CoffeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('커피콩이 충분하지 않습니다!');
      }
      this.coffeeBeans = shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
}
