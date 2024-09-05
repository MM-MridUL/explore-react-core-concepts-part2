import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './friends'

function App() {
  function handleClick(){
    alert('button click')
  }

  const handleClick2=()=>{
    alert('Button 2 clicked')
  }
  const addToFiVe=(num)=>{
    alert(num+5);
  }
  

  return (
    <>
      
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
    <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{alert('third Clicked')}}>third</button>
      <button onClick={()=>addToFiVe(3)}>Four</button>
     
     
    </>
  )
}

export default App
