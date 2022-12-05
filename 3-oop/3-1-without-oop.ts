{
  // 절차지향적으로 커피 기계 만들기
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;
  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('커피콩이 충분하지 않습니다!');
    }
    coffeeBeans = shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeans = 21;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
