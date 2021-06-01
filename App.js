
import './App.css';

import React,{useState} from 'react'

function App() {

const [ joke, setJoke] = useState("");

  async function acuditPlus() {
    const response = await fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    });
  

    let pepe = await response.json();
    
    setJoke(pepe.joke);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          ACUDITS
        </p>  
      </header> 
       <div className="contentMain" >{joke} </div>    
        <button onClick= {acuditPlus}>Pulsa per veure un acudit !!</button>
       </div>   
  );
}
export default App;
