{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  // 타입 앨리어스와 인터페이스 둘다 되는 것: object
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };

  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // 둘다 되는 것: class
  class Pos1 implements PositionType {
    x: number;
    y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }

  class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
  }

  // 둘다 되는 것: extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }

  type ZPositionType = PositionType & { z: number };

  // interface만 머지 가능
  interface PositionInterface {
    z: number;
  }

  // type PositionType = {
  //   z: number;
  // };

  // type alias만 computed properties 사용 가능
  type Person = {
    name: string;
    age: number;
  };

  type Name = Person['name']; // string

  type NumberType = number;
  type Direction = 'left' | 'right';
}
