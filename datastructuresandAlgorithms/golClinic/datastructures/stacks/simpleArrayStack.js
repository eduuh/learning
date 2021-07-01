class Stack {
    items = [];
    top = -1;
    constructor(size) {
        this.stackLength = size;
        this.items = new Array(size);
    }

    push = (element) => {
        if (this.isfull()) throw new Error("Stack Is full");
        this.items[++this.top] = element;
    };
    pop = () => {
        if (this.isempty()) throw new Error("Stack is Empty");
        let element = this.items[this.top];
        delete this.items[this.top--];
        return element;
    };
    peek = () => {
        if (this.isempty()) throw new Error("Stack is Empty");
        return this.items[this.top];
    };
    isempty = () => this.size() - 1 === -1;
    isfull = () => this.top + 1 === this.stackLength;
    size = () => this.top + 1;
}

const stack = new Stack(5);
const { items, push, pop } = stack;

push(4);
push(6);
push(7);
push(4);
push(6);
const a = pop();
push(8);
console.log(stack.size());
console.log(stack.isempty());
console.log(a);
console.log(stack);
