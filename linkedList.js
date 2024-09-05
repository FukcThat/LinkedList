import { Node } from "./node.js";

export class LinkedList {
  constructor(passedHead = null, passedTail = null) {
    this.head = passedHead;
    this.tail = passedTail;
    this.size = 0;
  }

  append = (value) => {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size++;
  };
}

console.log(Node);

// Append Value

// Prepend Value

// Size

// Head

// Tail

// At Index

// Pop (remove)

// Contains Value

// Find Value

// ToString

// Insert At

// Remove At
