Instructions:

- Add your answers inline to the markdown file.
- Use your own words.
- Come up with an answer from memory. Write it down, even if the answer is "I don't know."
- Then, submit all of your answers in a file to canvas. This is so Lloyd and I can get a sense of your understanding.
- Finally, we will go over the answers in class. Write down your revised answer below your original answer.


---
### Part 1: Control Flow - 15 minutes

1. Write an if statement. Name each of the components and how they work together.
<statement> if (<condition>) {<body>}
if the condition is true, the body of the statement is run.

2. Write a for loop. Describe each of its components. Indicate the order in which they are executed / evaluated.
for (<variables declarations & assignments>; <conditions>; <variables changes after every iteration>) {<body>}
A <for loop> assigns & declares all variables in the first argument as soon at it is invoked. It will then check if to see if each conditions in the second argument is true, if one of these is true, it will run all the code in its' body. After the body has been executed, the variables will be reassignned as stated in the third argument. After this first iteration, the <for loop> checks the conditions again, if one of these is true, it will run again and reassign variables after the iteration. This continues until none of the conditions are true.

3. Functions
 - 3a. Write a function. Describe each of its components and what each component does. Specify which of them are optional.
 function <name> (parameters) {body}
 A function runs its' body on invokation. Both the name and parameters are optional. The name can be used to call the function. Whereas the parameters can be used as variables within the body code.

 - 3b. Write a function being called, showing the instruction execution order.
 (function(){})()
 A self invoking annonymous function. In between the first (), the function is declared. It is then immediatly invoked by the last set of (). This function has no name, no parameters and no body. It is a legitimate function call, but does nothing.

---
### Part 2: Data Types - 10 minutes

4. Primitive Data Types
 - 4a. Give an example of an empty string and a non-empty string.
 empty string: ''
 non-empty string: 'occupied'
 
 - 4b. Give an example of a boolean.
true

 - 4c. Give an example of a Number.
8

5. Arrays
 - 5a. Give an example of an empty array.
[]

 - 5b. Give an example of an array with three elements in it.
[42,[],{hi:'you'}]

 - 5c. How do you add another element to this array?
array.push()

 - 5d. How do you get the length of this array?
array.length

 - 5e. Show how to iterate through the array using a loop.
 for (var i = 0; i < array.length; i++)
 
6. Objects
 - 6e. Give an example of an empty object.
 {}
 
 - 6b. Give an example of an object with three keys and three values.
{key1:'value1', key2:'value2', key3:'value3'}

 - 6c. Give an example of an object with two keys and two functions as values.
{key1:'value1', key2:'value2', method1: function(){}, method2:function(){}}

 - 6d. Describe one way of adding a key to an object.
object['key'] = 'value'

 - 6e. Describe the other way of adding a key to an object.
object.key = 'value'

 - 6f. Explain the difference between these two ways, and when it is appropriate to use each way.
Dot notation is preferred whenever possible for increased readability. However, dot notation does not always work. Examples:
object.number does not work, object[0] is the only way to access properity 0. 

 - 6g. Describe how to iterate though an object using a loop.
 for (keys in object)
 This <for in loop> will iterate through all the keys of the object.

---
### Part 3: Algorithms - 20 minutes

7. What is an algorithm?
An algorithm is a procedure to compute output from input.

8. For the following problem, first write down how exactly to solve the problem in English. Once you are able to describe it in English, translate it into code.

```js
// Given an array of values, write a function that finds the index of where the value is located, and if nothing is found, returns -1.
// Do not use the indexOf function.
// example: for ['apple', 'orange', 'pineapple']
	// 'orange' returns '1'
	// 'durian' returns '-1'
```

9. Again, for the following problem, first write down how exactly to solve the problem in English. Once you are able to describe it in English, translate it into code.

```js
// Write a function that finds all the indexes of where the value is located and returns them in an array, and if nothing is found, returns -1
// example: ['apple', 'orange', 'orange', 'pineapple']
	// 'orange' returns [1,2]
```
