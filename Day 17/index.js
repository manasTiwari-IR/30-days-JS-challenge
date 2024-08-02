//Day 17 - Data Structurres

//Activity 1 - Linked List
//task 1
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
//task 2
console.log('Linked List');

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    if (this.head === null) {
      this.head = new Node(data);
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node(data);
    }
  }

  remove(ele) {
    if (this.head === null) {
      console.log("List is empty");
    } else {
      let current = this.head;
      let prev = new Node(null);
      if (current.data === ele) {
        this.head = current.next;
        return `Removed : ${current.data}`;
      }
      while (current.next !== null) {
        prev = current;
        current = current.next;
        if (current.data === ele) {
          prev.next = current.next;
          return `Removed : ${current.data}`;
        }
      }
        return "Element not found";
    }
  }

  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}
let root = new LinkedList();
root.add(1);
root.add(2);
root.add(3);
root.add(4);
root.print();
console.log(root.remove(6));
root.print();

//Activity 2 - Stack
//task 3
console.log('\nStack');

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }
  peek() {
    return `Top : ${this.items[this.items.length - 1]}`;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log('Poped : ',stack.pop());
console.log(stack.peek());
//task 4 - Reverse a string using stack class
let str = "manas";
let revestr = "";
let st = new Stack();st
for(let x of str) {
  st.push(x);
}
while(st.items.length > 0) {
  revestr += st.pop();
}
console.log(revestr);

//Actitvity 3 - Queue
//task 5
console.log('\nQueue');

class Queue {
    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if(this.items.length === 0){
            return "Underflow";
        }
        return this.items.shift();
    }

    front(){
        return `Front : ${this.items[0]}`;
    }
}
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.front());
console.log('Dequeued : ',queue.dequeue());
console.log(queue.front());
//task 6 - print job scheduling using queue class  
let qe =  new Queue();
qe.enqueue("Job 1");
qe.enqueue("Job 2");
qe.enqueue("Job 3");
qe.enqueue("Job 4");
console.log('Job Scheduled : ',qe.dequeue());
console.log('Job Scheduled : ',qe.dequeue());

//Activity 4 - Binary Tree
//task 7    
class TreeNode {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
//task 8 
console.log('\nBinary Tree');
class BinaryTree {
    constructor(){
        this.root = null;
    }

    insert(data){
        let newNode = new TreeNode(data);
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(node,newNode){
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode;
            }else{
                this.insertNode(node.left,newNode);
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(node.right,newNode);
            }
        }
    }

    inorder(node){
        if(node !== null){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
}
let bt = new BinaryTree();
bt.insert(3);
bt.insert(2);
bt.insert(1);
bt.insert(4);
bt.inorder(bt.root);

//Activity 5 - Graph
//task 9 
console.log('\nGraph');
class Graph {
    constructor(){
        this.map = new Map();
    }

    addVertex(v){
        if(!this.map.has(v)){
            this.map.set(v,[]);
        }
    }
    
    addEdge(v1,v2){
        if(this.map.has(v1) && this.map.has(v2)){
            let arr = this.map.get(v1);
            arr.push(v2);
            this.map.set(v1,arr);
        }
    }

    BFS(v){
        let visited = new Set();
        let queue = [];
        visited.add(v);
        queue.push(v);
        while(queue.length > 0){
            v = queue.shift();
            console.log(v);
            let arr = this.map.get(v);
            for(let x of arr){
                if(!visited.has(x)){
                    visited.add(x);
                    queue.push(x);
                }
            }
        }
    }
}
let g = new Graph();
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);
g.addVertex(5);
g.addVertex(6);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,2);
g.addEdge(2,0);
g.addEdge(2,3);
g.addEdge(3,3);
g.addEdge(3,4);
g.addEdge(4,5);
g.addEdge(5,6);
g.BFS(2);
//task 10 - Use the Graph class to represent a simple network and perform BFS to find shortest path between two nodes
let network = new Graph();
network.addVertex('A');
network.addVertex('B');
network.addVertex('C');
network.addVertex('D');
network.addVertex('E'); 
network.addEdge('A','B');
network.addEdge('A','C');
network.addEdge('B','C');
network.addEdge('C','D');
network.addEdge('D','D');  
network.addEdge('D','E');

network.BFS('A');
