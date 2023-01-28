// stack 구현
// stack: LIFO( last in first out ), 나중에 들어오는 것이 처음에 나갈 수 있도록 해주는 자료구조

interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

// Impl (Implementation): 구현
class StackImpl implements Stack {
  private _size: number = 0;
  get size() {
    return this._size;
  }

  push(value: string) {
    this._size++;
  }

  pop(): string {
    this._size--;
  }
}
