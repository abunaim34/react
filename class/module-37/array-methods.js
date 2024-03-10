const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'Iphone', price: 300, brand: 'apple', color: 'golden'},
    {name: 'watch', price: 320, brand: 'casio', color: 'black'},
    {name: 'sunglass', price: 400, brand: 'ribon', color: 'blue'},
    {name: 'cemera', price: 60000, brand: 'canon', color: 'gray'}
]

//7. .map()
const brands = products.map(product => product.brand);
// console.log(brands)
const price = products.map(product => product.price);
// console.log(price)

//8. forEach()
// products.forEach(product => console.log(product))
products.forEach(product => {
//     console.log(product.color)
})

//9. filter
const cheap = products.filter(product => product.price <= 500)
// console.log(cheap)
// filter -> includes()
const specificName = products.filter(product => product.name.includes('n'));
// console.log(specificName)

// 10. find()
const special = products.find(product => product.name.includes('n'))
console.log(special)