// array destructuring
const numbers = [42, 65]
// const x = numbers[0];
// const y = numbers[1]
const [x, y] = [42,65]
const [a, b] = numbers
// console.log(x, y)
// console.log(a, b)

function boxify(num1, num2){
    const nums = [num1, num2]
    return nums;
}
const [first, second] = [55, 88]
const [third, forth] = boxify(44, 55)
// console.log(boxify(60, 41))


// array of object destructuring
const student = {
    name: 'sakib khan',
    age: 35,
    movies: ['king khan', 'dhakar mastan']
}
const [firstMovie, secondMovie] = student.movies
// console.log(firstMovie, secondMovie)


// object destructuring
const {name, age} = {name: 'alu', age: 14}
// console.log(name, age)

const employee = {
    ide: 'vs code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specfication: {
        height: 66,
        weight: 67,
        address: 'noakhali',
        drink: 'water',
        watch:{
            color: 'black',
            price: 500,
            brand: 'garmani'
        }
    }
}
const {ide, machine} = employee;
// console.log(ide, machine)

const {weight, height} = employee.specfication;
// console.log(weight, height)

const [css, js] = employee.language
// console.log(css, js)

const {brand} = employee?.specfication?.watch
console.log(brand)