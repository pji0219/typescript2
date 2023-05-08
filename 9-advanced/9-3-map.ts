{
  type Video = {
    title: string;
    author: string;
  };
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // }

  type VideoReadOnly = {
    readonly title: string;
    readonly author: string;
  };

  // 이것을 간편하게 map type
  // 배열의 map함수처럼 기존의 타입을 가지고 새로운 타입을 만들어주는 것이라고 생각하면 됨
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };

  type VideoOptional = Optional<Video>;
  const VideoOp: VideoOptional = {
    title: '모범택시',
  };

  type Animal = {
    name: string;
    age: string;
  };
  const animalOp: Optional<Animal> = {
    name: 'dog',
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  const animalReadOnly: ReadOnly<Animal> = {
    name: 'dog',
    age: '1',
  };

  // animalReadOnly.name = 'cat';

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj: Nullable<Video> = {
    title: null,
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
