import { LinkedList } from "./linkedList.js";
import { Node } from "./node.js";

const newList = new LinkedList();
newList.append(5);
newList.append(6);
newList.append(7);
newList.append(8);

newList.removeAt(3);

console.log(newList.head());
console.log(newList.tail());

console.log(newList.toString());
