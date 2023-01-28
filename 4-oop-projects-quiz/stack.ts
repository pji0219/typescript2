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
  private head?: StackNode;

  get size() {
    return this._size;
  }

  push(value: string) {
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): string {
    // null == undefined, null !== undefined
    if (this.head == null) {
      throw new Error('Stack is empty!');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;

    return node.value;
  }
}

const stack = new StackImpl();
stack.push('pji 1');
stack.push('kyj 2');
stack.push('ksh 3');

while (stack.size !== 0) {
  console.log(stack.pop());
}
