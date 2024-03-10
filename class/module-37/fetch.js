//1. JSON
const student = {
    name: 'sakib khan',
    age: 35,
    movies: ['king khan', 'dhakar mastan']
}
// JSON.stringify()
const studentJson = JSON.stringify(student)
console.log(studentJson)

// JSON.parse
const studentOnj = JSON.parse(studentJson)
console.log(studentOnj)


//2. fetch
fetch('url')
   .then(res => res.json())
   .then(data => console.log(data))


// Keys, values
const keys = Object.keys(student)
const values = Object.values(student)

// .forEach .map
const numbers = [25, 55, 44, 11,]
numbers.forEach(num => console.log(num))
numbers.map(num => num * 2)

// for of on array like object
// loop on an object using for in


// add or remove from an array
const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'Iphone', price: 300, brand: 'apple', color: 'golden'},
    {name: 'watch', price: 320, brand: 'casio', color: 'black'},
    {name: 'sunglass', price: 400, brand: 'ribon', color: 'blue'},
    {name: 'cemera', price: 60000, brand: 'canon', color: 'gray'}
]
const newProduct = {name: 'webcame', price: 700, brand: 'lal'}

// copy products array and then add newPorduct
const newPorduct = [...products, newProduct]

//create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone')