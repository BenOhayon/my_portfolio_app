export default class Stack {
    constructor() {
      this.stack = []
    }
 
    push(element) {
        this.stack.push(element)
    }
 
    pop() {
        if (!this.isEmpty()) {
            return this.stack.pop()
        }
        else {
            console.log('Stack is empty')
        }
    }
 
    isEmpty() {
        if (this.stack.length === 0) {
            return true
        }
        else {
            return false
        }
    }
  }
