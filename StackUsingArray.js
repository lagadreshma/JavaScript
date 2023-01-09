class Stack{

    constructor(){
        this.elements = [];
    }

    add(element){

        this.elements.push(element);

    }

    delete(){

        if(this.elements.length > 0){
            return this.elements.pop();
        }

    }

    peek(){

        return this.elements[this.elements.length - 1];

    }

    isEmpty(){

        if(this.elements.length == 0){
            return true;
        }else{
            return false;
        }

    }

    size(){
        return this.elements.length;
    }

    clear(){

        this.elements = [];

    }

}

let s1 = new Stack();

const prompt = require("prompt-sync")({sigint:true});

let size = prompt("Enter Size of Stack : ");
let element;

while(size > 0){

    element = prompt("Enter Element : ");
    s1.add(element);

    size--;
}

console.log("Display All elements of Stack Array : ");
console.log(s1.elements);

console.log("Length of Stack : " + s1.size());

console.log(s1.delete() + " is Popped.");

console.log(s1.peek() + " is the Top most element.");

console.log("Stack Is Empty? : " + s1.isEmpty());

console.log("Length of Stack : " + s1.size());

s1.clear();

console.log("Stack Is Empty? : " + s1.isEmpty());

