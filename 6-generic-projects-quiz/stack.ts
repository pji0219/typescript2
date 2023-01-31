{
  // 저번에 stack 구현한 것을 제네릭을 이용해 구현

  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  // Impl (Implementation): 구현
  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    get size() {
      return this._size;
    }

    push(value: T) {
      const node: StackNode<T> = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): T {
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

  const stack = new StackImpl<string>();
  stack.push('pji 1');
  stack.push('kyj 2');
  stack.push('ksh 3');

  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>();
  stack2.push(1);
  stack2.push(2);
  stack2.push(3);

  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
