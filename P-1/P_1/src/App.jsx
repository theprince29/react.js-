import {useState} from 'react'

function App() {
  const [ counter, setCounter]=useState(15)
  // let counter = 5;

  const  addValue = () => {
    console.log("clicked",Math.random());
    // counter = counter+1;
    if(counter < 20)
    {

      setCounter(counter => counter + 1 )
    
    }
    
    }  
    const  removeValue = () => {
      console.log("clicked",Math.random());
      // counter = counter+1;
      if (counter >0 )
      setCounter(counter-1)
      }

  return (
    <div>
      <h1>Counter Project</h1>

      <h2>counter value : {counter}</h2>

      <button onClick={addValue} >add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </div>
  )
}

export default App