import { Node } from "./node.js";

export class LinkedList {
  constructor(passedHead = null, passedTail = null) {
    this.Head = passedHead;
    this.Tail = passedTail;
    this.Size = 0;
  }

  append = (value) => {
    const newNode = new Node(value);
    if (this.Head === null) {
      this.Head = newNode;
    } else {
      this.Tail.next = newNode;
    }
    this.Tail = newNode;
    this.Size++;
  };

  prepend = (value) => {
    const newNode = new Node(value);

    if (this.Head) {
      newNode.next = this.Head;
    } else {
      this.Tail = newNode;
    }
    this.Head = newNode;
    this.Size++;
  };

  size = () => {
    return this.Size;
  };

  head = () => {
    return this.Head;
  };

  tail = () => {
    return this.Tail;
  };

  at = (index) => {
    if (index > this.Size - 1) return "Index out of bounds";
    let currentNode = this.Head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  pop = () => {
    if (!this.Head) return;
    if (this.Head === this.Tail) {
      this.Head = null;
      this.Tail = null;

      this.Size = 0;
    } else {
      let currentNode = this.Head;

      while (currentNode.next !== this.Tail) {
        currentNode = currentNode.next;
      }

      currentNode.next = null;
      this.Tail = currentNode;

      this.Size--;
    }
  };
}

// Pop (remove)

// Contains Value

// Find Value

// ToString

// Insert At

// Remove At
