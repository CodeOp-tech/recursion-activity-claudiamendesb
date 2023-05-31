/*------------------
1)
Solve factorial using recursion.
Try not to look at the slides.

Test case:
console.log(factorial(3)); // 6
console.log(factorial(7)); // 5040
------------------*/

function factorial(x) {
  // base case
  // recursive case
}

/*------------------
2)
Create a string of stars
using recursion. The length (l) of
the string should equal the number
passed into the createStars function.

Test case:
console.log(createStars(5)); // "*****"
console.log(createStars(0)); // ""
------------------*/

function createStars(l) {
  // base case
  // recursive case
}

/*------------------
3)
Create a recursive function called
addUpTo that adds all the numbers
up to a number (n). 

Test cases:
console.log(addUpTo(1)); // 1
console.log(addUpTo(2)); // 3 (1 + 2)
console.log(addUpTo(3)); // 6 (1 + 2 + 3)
console.log(addUpTo(100)); // 5050 (1 + 2 + ... + 99 + 100)
------------------*/

function addUpTo(n) {
  // base case
  // recursive case
}

/*------------------
4)
Create a recursive function that
adds all the items in an array together.

Hint: use the .pop() method to remove
items from the array as you go.

Test case:
console.log(sum([1, 2, 3, 4, 5, 6])); // 21
------------------*/

function sum(arr) {
  // base case
  // recursive case
}

/*------------------
5)
Solve Fibonnaci using recursion.

In Fibonnaci, the next number is a sum of the
two preceding ones. The first two numbers are 1,
then 2(1+1), then 3(1+2), 5(2+3) and so on:
1, 1, 2, 3, 5, 8, 13, 21....

Hint: you will call the fibonnaci equation
TWICE in the recursive case.

Test cases:
console.log(fib(0)); // 1
console.log(fib(1)); // 1
console.log(fib(2)); // 2
console.log(fib(3)); // 3
console.log(fib(7)); // 21
------------------*/

function fib(n) {
  // base case
  // recursive case
}

/*------------------
6)
Create a function that takes a grid
as an argument and adds all the numbers
in that grid together. The grid can have any number of nested arrays, with any possible depth.

Test cases:
const y = [[[1], [2]]];
console.log(addGridItems(y)); // 3
const x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];
console.log(addGridItems(x)); // 50
const z = [[1, 0, -3, [2, 4], [3]], 4, [[4, 3], [[5, -3], -1], [6, [[[10]]]]], [[7, -5, -5], [8, 0], [9, 1]]];
console.log(addGridItems(z)); // 50
------------------*/

function addGridItems(grid) {}

/*------------------
7) Write a sortedInsert() function which inserts a node into 
the correct location of a pre-sorted linked list which is sorted in ascending order
sortedInsert() takes the head of a linked list and value used to create a node as arguments. 
sortedInsert() should also return the head of the list.
sortedInsert() should be able to insert a node into an empty list

Test cases:
const head1 = new Node(1, new Node(2, new Node(3)));
const sorted1 = sortedInsert(head1, 4);
console.log(
  sorted1.value,
  sorted1.next.value,
  sorted1.next.next.value,
  sorted1.next.next.next.value
); // 1 2 3 4

const head2 = new Node(1, new Node(7, new Node(8)));
const sorted2 = sortedInsert(head2, 5);
console.log(
  sorted2.value,
  sorted2.next.value,
  sorted2.next.next.value,
  sorted2.next.next.next.value
); // 1 5 7 8

const head3 = new Node(3, new Node(5, new Node(9)));
const sorted3 = sortedInsert(head3, 1);
console.log(
  sorted3.value,
  sorted3.next.value,
  sorted3.next.next.value,
  sorted3.next.next.next.value
); // 1 3 5 9

const head4 = null;
const sorted4 = sortedInsert(head4, 1);
console.log(sorted4.value); // 1
------------------*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function sortedInsert(head, value) {
  // Your code goes here.
  // Remember to return the head of the list.
}

/*------------------
7) Can you re-do exercises 1 to 5 using tail call optimization?
- [] Read about tail call optimization:
  - https://en.wikipedia.org/wiki/Tail_call
  - https://exploringjs.com/es6/ch_tail-calls.html
  
------------------*/
