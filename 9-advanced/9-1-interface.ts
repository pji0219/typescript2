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
  };

  // 둘다 되는 것: class
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }

  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }
}
