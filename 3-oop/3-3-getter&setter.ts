{
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
