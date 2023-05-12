class Stack {
    constructor() {
        this.items = [];
        this.count = 0;

    }
    // Adding the items 
    push(element) {
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count++;

        return this.count - 1
    }
    //  Removing the items ( pop)
    pop() {
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        console.log(`${deleteItem} removed  ${this.count}`)
        return deleteItem

    }
    peek() {
        console.log(`top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }
    total() {
        console.log(`This is the total ${this.count}`)
        return this.count
    }
    max() {
        let max = -Infinity; // start with a very small value
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i] > max) {
            max = this.items[i];
          }
        }
        console.log(`This is the max ${max}`)
        return max;
      }
      
}

const stack = new Stack();

stack.push(100)
stack.push(399)
stack.push(39)
stack.push(3909)
stack.push(3099)
stack.max()
stack.total()
stack.pop()
stack.peek()
stack.total()
