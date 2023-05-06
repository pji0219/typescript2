{
  // index type
  const obj = {
    name: 'pji',
  };
  obj.name; // pji
  obj['name']; // pji

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string 타입으로 됨
  const text: Name = 'hello';

  type Gender = Animal['gender']; // 'male' | 'female';
  const gender: Gender = 'male';

  type Keys = keyof Animal; // Animal에 있는 모든 key를 할당 ('name' | 'age' | 'gender')
  const key: Keys = 'age';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };
  const person: Person = {
    name: 'pji',
    gender: 'male',
  };
}
