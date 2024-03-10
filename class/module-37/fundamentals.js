//1. How to declare a variable using let and const
const fatherName = 'Arnol';
let season = 'rany';
season = 'shit';

// 2. Condition
// 6 basic conditions: <, >, ===, ! == , < =, > =, and multiple conditions: &&, ||
if(fatherName === 'anrol' || season === 'rany'){

}
else if(fatherName === 'Arnol'){

}
else{

}

// 3. array
// index, length, push
const numbers = [35, 85, 41, 55]
numbers[0] = 55

//4. for loop while loop
for (let i = 0; i <numbers.length; i++){
    const number = numbers[i]
    console.log(number)
}

//5. funtion
function multiply(num1, num2){
    const result = num1 * num2;
    return result
}
const output = multiply(25, 41);

//6. object
//3 ways acces property by name
const student = {
    name: 'sakib khan',
    age: 35,
    movies: ['king khan', 'dhakar mastan']
}

const myVariable = 'age'

console.log(student.age)//direct by property

console.log(student['age'])//access via property name string

console.log(student[myVariable])//acces via property name in a variable.

