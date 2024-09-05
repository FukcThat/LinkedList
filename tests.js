import { LinkedList } from "./linkedList.js";
import { Node } from "./node.js";

const newList = new LinkedList();
newList.prepend(5);
newList.append(6);
newList.append(7);
newList.pop();
newList.prepend(8);
console.log(newList.size());
console.log(newList);
