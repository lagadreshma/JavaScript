class Node{

    constructor(element) {
        this.element = element;
        this.next = null;
    }

}

class Stack{

    constructor() {
        this.top = null;
        this.size = 0;
    }

    isEmpty(){

        if(this.size == 0){
            return true;
        }else{
            return false;
        }

    }

    push(element){

        let newNode = new Node(element);

        if(this.top == null){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }

        this.size++;

    }

    pop(){

        let curr = this.top;
        this.top = curr.next;

        return curr.element;

    }

    search(element){

        let curr = this.top;

        while(curr){
            
            if(curr.element == element){
                return true;
            }

            curr = curr.next;

        }

        return false;

    }

    display(){

        let curr = this.top;
        let str = " "
        while(curr){

            str += curr.element + " ";
            curr = curr.next;

        }

        console.log(str);

    }

    sizeOfStack(){
        return this.size;
    }

    clearStack(){
        this.top = null;
        this.size = 0;
    }

}

let s1 = new Stack();

const prompt = require("prompt-sync")({sigint: true});


// Push Elements At Stack
let ele1 = prompt("Enter new Element : ");
s1.push(ele1);

let ele2 = prompt("Enter new Element : ");
s1.push(ele2);

let ele3 = prompt("Enter new Element : ");
s1.push(ele3);

// Display Stack Elements
console.log("Stack Elements : ");
s1.display();

// Size of Stack
console.log("Size of Stack : " + s1.sizeOfStack());

// stack is Empty or Not
console.log("Stack Is Empty : " + s1.isEmpty());

// pop elements
console.log(s1.pop() + " is Popped.");

// Size of Stack
console.log("Size of Stack : " + s1.sizeOfStack());

let element1 = prompt("Enter Element for search in Stack : ")
console.log(element1 + " is Present ? : " + s1.search(element1));

// stack is Empty or Not
console.log("Stack Is Empty : " + s1.isEmpty());

// clear Stack
s1.clearStack();

// stack is Empty or Not
console.log("Stack Is Empty : " + s1.isEmpty());