let fruits = ['apple', 'banana', 'orange'];
let [variable1, variable2, variableN] = fruits

console.log("Задание 1:")
console.log(variable1);  
console.log(variable2); 
console.log(variableN); 

console.log("Задание 2:");

let fruit = ['apple', 'banana', 'orange'];
let [firstFruit, , thirdFruit] = fruit;

console.log(firstFruit);
console.log(thirdFruit);

console.log("Задание 3:");

let fruitz = ['apple']; 
let [first, second = 'banana'] = fruitz; 

console.log(first); 
console.log(second); 