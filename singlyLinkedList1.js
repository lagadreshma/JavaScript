class Node{

    constructor(element){

        this.element = element;
        this.next = null;

    }

}

class singlyLinkedList{

    constructor(){
        this.head = null;
        this.size = 0;
    }

    addAtBegin(element){

        let newNode = new Node(element);
        
        if(this.head == null){

            this.head = newNode;

        }else{

            newNode.next = this.head;
            this.head = newNode;

        }

        this.size++;

    }

    addAtEnd(element){

        let newNode = new Node(element);
        let curr = this.head;

        if(this.head == null){

            this.head = newNode;

        }else{

            while(curr.next){
                curr = curr.next;
            }

            curr.next = newNode;
            curr = newNode;
        }

        this.size++;

    }

    addAtPosition(element, index){

        if(index < 0 || index > this.size){
            console.log("Invalid Index ");
        }else{

            if(index == 0){
                this.addAtBegin(element);
                return;
            }
    
            if(index == (this.size)){
                this.addAtEnd(element);
                return;
            }

            let newNode = new Node(element);
            let curr, pre, i = 0;
            curr = this.head;

            while(i < index){

                pre = curr;
                curr = curr.next;
                i++;

            }

            pre.next = newNode;
            newNode.next = curr;

        }

        this.size++;

    }

    searchByElement(element){

        let curr = this.head;
        let c = 0;

        while(curr){

            if(curr.element === element){
               return c;
            }

            c++;
            curr = curr.next;

        }

    }

    searchByIndex(index){

        if(index < 0 || index >= this.size){

            console.log("Invalid Index");

        }else{

            let i = 0;
            let curr = this.head;

            while(curr){

                if(i == index){
                    return curr.element;
                }

                i++;
                curr = curr.next;

            }

        }

        return -1;

    }

    updateByElement(oldEle, newEle){

        let curr = this.head;
        let flag = 0;

        while(curr){

            if(curr.element == oldEle){
                curr.element = newEle;
                flag = 1;
                break;
            }

            curr = curr.next;

        }

        if(flag == 1){
            console.log("Element is Found and Updated Successfully.");
        }else{
            console.log("Element is Not Found.");
        }

    }

    updateByIndex(index, newValue){

        let curr = this.head;
        let i = 0, flag = 0;

        while(curr){

            if(i == index){
                curr.element = newValue;
                flag = 1;
                break;
            }

            i++;
            curr = curr.next;

        }

        if(flag == 1){
            console.log("Element is Found and Updated Successfully.");
        }else{
            console.log("Element is Not Found.");
        }

    }

    deleteByElement(element){

        let curr = this.head;
        let prev = null;

        while(curr){

            if(curr.element == element){

                if(prev == null){
                    this.head = curr.next;
                }else{
                    prev.next = curr.next;
                }

                this.size--;
                return curr.element;
                
            }

            prev = curr;
            curr = curr.next;

        }

        return -1;

    }

    deleteByPosition(index){

        if(index < 0 || index >= this.size){

            console.log("Please Enter Valid Position");

        }else{

            let curr, prev, i = 0;
            curr = this.head;

            if(index == 0){
                this.head = curr.next;
            }else{

                while(i < index){

                    prev = curr;
                    curr = curr.next;
                    i++;
    
                }

                prev.next = curr.next;    

            }

            this.size--;
            return curr.element;

        }

        return -1;

    }

    reverseList(){

        let curr, prev, end;
        curr = this.head;
        prev = null;
        end = null;

        while(curr){

            end = curr.next;
            curr.next = prev;
            prev = curr;
            curr = end;

        }

        this.head = prev;

    }

    mergeTwoLists(sll, sll2){

        let curr = sll.head;

        while(curr.next){

            curr = curr.next;

        }

        curr.next = sll2.head;

    }

    indexOf(element){

        let curr = this.head;
        let i = 0;

        while(curr){

            if(curr.element == element){
                return i;
            }

            i++;
            curr = curr.next;

        }

        return -1;

    }

    displayAllNodes(){

        let curr = this.head;
        let str = " " ;

        while(curr){

            str += curr.element + " ";
            curr = curr.next;

        }

        console.log(str);

    }

    isEmpty(){

        if(this.size === 0){
            return true;
        }else{
            return false;
        }

    }

    sizeOfList(){

        return this.size;

    }

    clearAll(){

        this.head = null;
        this.size = 0;

    }

}

let sll = new singlyLinkedList();
let sll2 = new singlyLinkedList();


// get input from user
// run command on terminal - npm install prompt-sync

const prompt = require("prompt-sync")({ sigint: true });

let ele = prompt("Enter Element At Begin : ");
sll.addAtBegin(ele);

let element = prompt("Enter Element At Begin : ");
sll.addAtBegin(element);


sll.addAtBegin(10);
sll.addAtBegin(90);

console.log("All Elements are : ");
sll.displayAllNodes();

let ele1 = prompt("Enter Element At End : ");
sll.addAtEnd(ele1);
console.log("All Elements are : ");
sll.displayAllNodes();

let ele2 = prompt("Enter Element At Position: ");
let pos = prompt("Enter Position : ");
sll.addAtPosition(ele2,pos);
console.log("All Elements are : ");
sll.displayAllNodes();

let ele3 = prompt("Enter Element to find it's Position : ");
console.log(ele3 + " is Present At Position : " + sll.searchByElement(ele3));

let index = prompt("Enter Index to search element at that Position : ");
console.log(sll.searchByIndex(index));

console.log("Size of List : " + sll.sizeOfList());
console.log("List is Empty : " + sll.isEmpty());

let deleteEle = prompt("Enter Element Which we have to delete : ");
console.log(sll.deleteByElement(deleteEle));
console.log("All Elements are : ");
sll.displayAllNodes();

let deleteInd = prompt("Enter Position of Element to delete it : ");
console.log(sll.deleteByPosition(deleteInd));
console.log("All Elements are : ");
sll.displayAllNodes();

let oldele = prompt("Enter Old Element Which we have to Update : ");
let newele = prompt("Enter New Element : ");
sll.updateByElement(oldele, newele);
console.log("All Elements are : ");
sll.displayAllNodes();

let ind = prompt("Enter Position of Element Which We have Update That Element : ");
let newEle = prompt("Enter New Element : ");
sll.updateByIndex(ind, newEle);
console.log("All Elements are : ");
sll.displayAllNodes();


console.log("<br>");
console.log("For Merging Two List : ");
let n = prompt("Enter Size of Second List : ");
let elementn;


while(n > 0){

    elementn = prompt("Enter Element : ");
    sll2.addAtEnd(elementn);

    n--;

}

console.log("All Elements of Second List : ");
sll2.displayAllNodes();

sll.mergeTwoLists(sll, sll2);
console.log("All Elements are : ");
sll.displayAllNodes();


sll.reverseList();
console.log("Reverse Elements are : ");
sll.displayAllNodes();


let findindex = prompt("Enter Element To Find it's Position : ");
console.log(findindex + " is Present at Index : " + sll.indexOf(findindex));

sll.clearAll();
console.log("List Is Empty : " + sll.isEmpty())



// give Input from user in node js using following steps

// const readline = require('readline').createInterface({
//     input : process.stdin,
//     output: process.stdout
// });

// readline.question("Enter element : ", ele =>{
//     sll.addAtBegin(ele);
//     readline.close();
// });
