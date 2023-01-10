class Stack{

    constructor(){
        this.elements = [];
    }

    add(element){
        this.elements.push(element);
    }

    remove(){
        if(this.elements.length > 0){
            this.elements.pop();
        }
    }

    reverseString(){

        let str = "";
        let length = this.elements.length;

        while(length > 0){

            str += this.elements.pop([length - 1]) + "";
            length--;

        }

        console.log(str);

    }

}

let s1 = new Stack();

const prompt = require("prompt-sync")({sigint:true});

let size = prompt("Enter Size of Stack : ");
let str;
while(size > 0){

    str = prompt("Enter Char : ");
    s1.add(str);
    size--;

}

console.log("All Elements of Stack : ");
console.log(s1.elements);

console.log("Reversed String is : ");
s1.reverseString();