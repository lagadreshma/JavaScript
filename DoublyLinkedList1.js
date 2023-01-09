class Node{

    constructor(element){
        this.element = element;
        this.next = null;
        this.prev = null;
    }

}

class doublyLinkedList{

    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Element add at Begining of the Doubly Linked List
    insertAtBegin(element){

        let newNode = new Node(element);

        if(this.head == null){

            this.head = newNode;

        }else{

            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;

        }

        this.size++;

    }

    insertAtEnd(element){

        let newNode = new Node(element);
        let curr = this.head;

        if(this.head == null){

            this.head = newNode;

        }else{

            while(curr.next){

                curr = curr.next;

            }

            newNode.prev = curr;
            curr.next = newNode;
            curr = newNode;

        }

        this.size++;

    }

    // inserting node at given position
    insertAtPosition(element, index){

        if(index < 0 || index > this.size){

            console.log("Please Enter Valid Index.");

        }else{

            if(index == 0){
                this.insertAtBegin(element);
                return;
            }

            if(index == this.size){
                this.insertAtEnd(element);
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

            newNode.next = curr;
            newNode.prev = pre;
            pre.next = newNode;
            curr.prev = newNode;
            curr = newNode;

        }

        this.size++;

    }

    // search element is present in list
    searchByElement(element){

        let curr = this.head;

        while(curr){

            if(curr.element == element){
                return true;
            }

            curr = curr.next;

        }

        return false;

    }

    // search which element is present at given position
    searchByIndex(index){

        if(index < 0 || index >= this.size){

            console.log("Invalid Index");

        }else{

            let curr = this.head;
            let i = 0;

            while(curr){

                if(i == index){
                    return curr.element;
                }

                curr = curr.next;
                i++;

            }

        }

        return -1;

    }

    updateByValue(oldValue, newValue){

        let curr = this.head;
        let flag = 0;

        while(curr){

            if(curr.element == oldValue){
                curr.element = newValue;
                flag = 1;
                break;
            }

            curr = curr.next;

        }

        if(flag == 1){
            console.log("Element is Found and Updated Successfully!!!");
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
            console.log("Index is Found and Value is Updated Successfully.");
        }else{
            console.log("Index is Not Found");
        }

    }

    deleteByValue(element){

        let curr = this.head;
        let pre = null;

        while(curr){

            if(curr.element == element){

                if(pre == null){
                    this.head = curr.next;
                }else if(curr.next == null){

                    pre.next = null;

                }else{
    
                    pre.next = curr.next;
                    curr.next.prev = pre;
    
                }

                this.size--;
                return curr.element;

            }

            pre = curr;
            curr = curr.next;

        }

    }

    deleteByIndex(index){

        if(index < 0 || index >= this.size){

            console.log("Enter Valid Index");

        }else{

            let curr = this.head;
            let pre = null;
            let i = 0;
     
            if(index == 0){

                this.head = curr.next;

            }else{

                while(i < index){
                    pre = curr;
                    curr = curr.next;
                    i++;
                }

                pre.next = curr.next;
                curr.next.prev = pre;

            }

            this.size--;
            return curr.element;

        }


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

    mergeTwoList(dll, dll2){

        let curr = dll.head;

        while(curr.next){
            curr = curr.next;
        }

        curr.next = dll2.head;

    }


    // display all elements of Linked List

    displayAllNodes(){

        let curr = this.head;
        let str = " ";

        while(curr){

            str += curr.element + " ";
            curr = curr.next;

        }

        console.log(str);

    }

    // find index of element
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


    // check list is Empty or not
    isEmpty(){

        if(this.size === 0){
            return true;
        }else{
            return false;
        }

    }


    // size of List
    sizeOfList(){

        return this.size;

    }

    // clear or empty list
    clearAll(){

        this.head = null;
        this.size = 0;

    }

}

let dll = new doublyLinkedList();
let dll2 = new doublyLinkedList();

const prompt = require("prompt-sync")( { sigint: true } );


// Inserting node at Begin of list
let ele1 = prompt("Enter Element at Begin : ");
dll.insertAtBegin(ele1);
let ele2 = prompt("Enter Element at Begin : ");
dll.insertAtBegin(ele2);

// display All Nodes 
dll.displayAllNodes();

// display size of list
console.log("Size of List : " + dll.sizeOfList());


// inserting node at End of list
let ele3 = prompt("Enter Element at End : ");
dll.insertAtEnd(ele3);
let ele4 = prompt("Enter Element at End : ");
dll.insertAtEnd(ele4);

// display All Nodes 
dll.displayAllNodes();

// display size of list
console.log("Size of List : " + dll.sizeOfList());


// inserting node at Given Position of list
let ele5 = prompt("Enter Element at Given Position : ");
let pos1 = prompt("Enter Position : ");
dll.insertAtPosition(ele5, pos1);
let ele6 = prompt("Enter Element at Given Position : ");
let pos2 = prompt("Enter Position : ");
dll.insertAtPosition(ele6, pos2);

// display All Nodes 
dll.displayAllNodes();

// display size of list
console.log("Size of List : " + dll.sizeOfList());

// display List is empty or Not
console.log("List is Empty : " + dll.isEmpty());

// search element is present in list or not
let searchEle = prompt("Enter Element to search in list : ");
console.log(searchEle + " is Present in List ? : " + dll.searchByElement(searchEle));

// search element present at given postion 
let searchIndex = prompt("Enter Position to find Element present at that position : ");
console.log(dll.searchByIndex(searchIndex) + " is Present at " + searchIndex + " index.");

// Update By Value
let oldele = prompt("Enter Element to Change it's Value : ");
let newele = prompt("Enter New Value : ");
dll.updateByValue(oldele, newele);

// display All Nodes 
console.log("Display Updated List : ");
dll.displayAllNodes();

// Update By Index
let index = prompt("Enter Index to update it's Value : ");
let newEle = prompt("Enter New Value : ");
dll.updateByIndex(index, newEle);

// display All Nodes 
console.log("Display Updated List : ");
dll.displayAllNodes();

// for merging two list
console.log("For Merging : ");
let size = prompt("Enter Size of Second List : ");
let Element;
while(size > 0){

   Element = prompt("Enter Element : ");
   dll2.insertAtEnd(Element);

   size--;

}

// Displaying nodes of Second List
console.log("Elements of Second List : ");
dll2.displayAllNodes();

dll.mergeTwoList(dll, dll2);
// display All Nodes
console.log("Display Two Merged Lists : "); 
dll.displayAllNodes();



// Delete node by providing value
let value = prompt("Enter Element For Delete : ");
console.log(dll.deleteByValue(value) + " is Deleted.");

// Delete node by providing index
let ind = prompt("Enter Index To delete that node : ");
console.log(dll.deleteByIndex(ind) + " is Deleted.");

// display All Nodes 
console.log("Display Updated List : ");
dll.displayAllNodes();

// reverse list
dll.reverseList();
// display All Nodes 
console.log("Reversed List is : ");
dll.displayAllNodes();


// find index of element
let element = prompt("Enter Element to find it's index : ");
console.log(element + " is Present at index : " + dll.indexOf(element));

// clear all nodes of list / empty list
dll.clearAll();

// display List is empty or Not
console.log("List is Empty : " + dll.isEmpty());