class Node {
  constructor(value) {
    this.id = `Tile-${value}`;
    this.value = value;
    this.width = 2 * value;
    this.next = null;
  }
}

class Stack {
  constructor(maxLength) {
    this.top = null;
    this.bottom = null;
    this.maxLength = maxLength;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top; //Apuntamos al elemento que está en la cima
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  peek() {
    return this.top
  }
  pop() {
    if (this.length > 0) {
      let topNode = this.top;
      if (topNode === this.maxValue){
        
      }
      this.top = topNode.next;
      this.length--;
      return topNode;
    }
  }
  traverse() {
    let list = [];
    let currentNode = this.top;
    while(currentNode){
      list.push(currentNode);
      currentNode = currentNode.next;
    }
    return list;
  }
}

export default Stack;
