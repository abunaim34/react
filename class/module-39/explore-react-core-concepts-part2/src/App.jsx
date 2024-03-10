import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './User'
import Friends from './Friends'

function App() {

  function handleCLick(){
    alert('button clicked')
  }

  const handleCLick2 = () =>{
    alert('button clicked')
  }

  const addToFour = (num) =>{
    alert(num + 5)
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleCLick}>Click Me</button>
      <button onClick={handleCLick2}>Click 2</button>
      <button onClick={() => {alert("third clicked")}}>Third</button>
      <button onClick={() => addToFour(3)}>Four</button>
    </>
  )
}

export default App
