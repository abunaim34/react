const numbers = [42,44, 44, 55, 65]


const student = {
    name: 'sakib khan',
    age: 35,
    movies: ['king khan', 'dhakar mastan']
}

// template string
const about = `my name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`
console.log(about)

// arrow function
// none parameter
const getFiftyFIve = () => 56;
// single perameter
const addSixtyFive = num => num + 65;

// even
const isEven = x => x % 2 == 0

// multiple perameter
const addThree = (x, y, z) => x + y + z;

// mutli line
const doMath = (num3, num2) =>{
    const sum = num3 + num2
    return
}

// spread operator
const newNumbers = [...numbers]
numbers.push(99)
numbers.push(99)
numbers.push(99)

console.log(newNumbers)
console.log(numbers)

const currentNumbers = [...numbers, 11]
console.log(currentNumbers)