class Node {

    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  
  class DoublyLinkedList {
  
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    toArray() {
      const vals = [];
      let runner = this.head;
  
      while (runner) {
        vals.push(runner.data);
        runner = runner.next;
      }
      return vals;
    }
  
  
    insertAtFront(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        let temp = this.head
        temp.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
      return this;
      //insert a node at front
    }
  
    insertAtBack(data) {
      const newTail = new Node(data);
  
      if (!this.head) {
        // if no head set the newTail to be both the head and the tail
        this.head = newTail;
        this.tail = newTail;
      } else {
        this.tail.next = newTail;
        newTail.prev = this.tail;
  
        this.tail = newTail;
      }
      return this;
      //insert a node at back
    }
  
      //check if this DLL is a palindrome
      // JAVA ROCKS!!!!
    isPalindrome(){
      // Psuedo
      // loop through the SLL
      
      let pointer1 = this.head;
      let pointer2 = this.tail
      
      // Edge Case: empty DLL
      if (!this.head && !this.tail) {
        return true;
      }
      
      while (pointer1 != pointer2 || pointer1.next!== pointer2) {
        if(pointer1.data != pointer2.data){
          return false;
        }
        pointer1 = pointer1.next;
        pointer2 = pointer2.prev;
        // if (pointer1.next == pointer2) {
        //     break;
        // }
      }
      return true;
    }
  
    removeSortedDup(){
      // Edge Case
      if (this.head == null) {
        return;
      }
      // if (this.head) {
  
      // }
  
      let follower = this.head
      let runner = follower.next
      //in a sorted list, remove the duplicated node. 
      while (runner) {
        // if(follower = this.head && follower.data == runner.data){
        //   follower.next = runner.next
        //   follower.prev = runner
        //   runner = runner.next       
        // }
        if(follower.data == runner.data){
          //console.log("*** found dup ****")
          runner.prev = follower.prev
          follower.prev.next = runner
        }  
        follower = runner
        runner = runner.next
      }
      return
    }
  }
  
  
  
  //palindrome
  console.log("");
  console.log("**********************************");
  console.log("Test Palindrome: abccba");
  let list3 = new DoublyLinkedList();
  list3.insertAtFront('a');
  list3.insertAtFront('b');
  list3.insertAtFront('c');
  list3.insertAtFront('c');
  list3.insertAtFront('b');
  list3.insertAtFront('a');
  console.log("Is palindrome: ", list3.isPalindrome());
  
  // palindrome odd length
  console.log("");
  console.log("**********************************");
  console.log("Test Palindrome: abcba");
  let list4 = new DoublyLinkedList();
  list4.insertAtFront('a');
  list4.insertAtFront('b');
  list4.insertAtFront('c');
  list4.insertAtFront('b');
  list4.insertAtFront('a');
  console.log("Is palindrome: ", list4.isPalindrome());
  
  // not palindrome
  console.log("");
  console.log("**********************************");
  console.log("Test Palindrome: abcda");
  let list5 = new DoublyLinkedList();
  list5.insertAtFront('a');
  list5.insertAtFront('b');
  list5.insertAtFront('c');
  list5.insertAtFront('d');
  list5.insertAtFront('a');
  console.log("Is palindrome: ", list5.isPalindrome());
  
  console.log("");
  console.log("**********************************");
  console.log("Test Remove Sorted Duplicate: abccba");
  console.log("original list");
  console.log(list3.toArray());
  list3.removeSortedDup();
  console.log("dupe removed");
  console.log(list3.toArray());
  
  let list6 = new DoublyLinkedList();
  list6.insertAtFront('a');
  list6.insertAtFront('a');
  list6.insertAtFront('b');
  list6.insertAtFront('c');
  list6.insertAtFront('c');
  list6.insertAtFront('b');
  list6.insertAtFront('a');
  console.log("");
  console.log("**********************************");
  console.log("Test Remove Sorted Duplicate:");
  console.log("original list");
  console.log(list6.toArray());
  list6.removeSortedDup();
  console.log("all dupes removed");
  console.log(list6.toArray());