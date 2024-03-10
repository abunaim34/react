import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actore from './Actore'
import Singer from './Singer'
import Books from './book'

function App() {
  const [count, setCount] = useState(0)
  const actore = ['sakib', 'Shoriful', 'Jasim', 'Rubel']
  const singers = [
    {id: 1, name: 'junaid jashed', age: 55},
    {id: 2, name: 'said ahmed', age: 34},
    {id: 3, name: 'seikh anam', age: 28},
    {id: 4, name: 'abu ubaida', age: 30},
  ]

  const books = [
    {id: 1, name: 'hedaya', price: '800'},
    {id: 2, name: 'jalalin', price: '800'},
    {id: 3, name: 'kanj', price: '800'},
    {id: 4, name: 'kafia', price: '800'},
  ]
  return (
    <>
      <Books book={books}></Books>
      <h1>Vite + React</h1>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actore name={"Bappa Rax"}></Actore>
      {
        actore.map(actor => <Actore name={actor}></Actore>)
      }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore core concepst" isDone={false}></Todo>
      <Todo task="Try jsx" isDone={true}></Todo>
      <Device name="Laptop" price="50"></Device>
      <Device name="Mobaile"></Device>
      <Person></Person>
      <Student grad="7" score="10"></Student>
      <Student grad={12} score={85}></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props){
  // console.log(props)
  return <h2>This devaice: {props.name} price: {props.price}</h2>
}

function Person(){
  const age = 25;
  const money = 20; 
  const person = {person: 'sakib', age: 12};
  return <h3>I am {person.name} with age: {age + money} </h3>
}

// const {grad, score} = {grad:'7', score: '10'}
function Student({grad=1, score=0}){
  // console.log(grad, score)
   return(
    <div className='student'>
      <h3>this is a student</h3>
      <p>class: {grad} </p>
      <p>score: {score} </p>
   </div>
   )
}

function Developer(){
  const developerStyle ={
    border: '2px solid black',
    padding: '20px',
    margin: '20px',
    borderRadius: '10px'
  }
  return(
    <div style={developerStyle}>
      <h5>devo devo</h5>
      <p>coding:</p>
    </div>
  )
}
export default App
