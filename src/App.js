
import './App.css';
import React from 'react';
import { Box,Button,Main,Heading,Paragraph } from 'grommet';
import  { useState } from 'react';
import background from "./group.jpg";

import Temps from "./temps.js";

function App() {

  const [joke, setJoke] = useState("");

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
    <div>
    <div  className = "contentMain" style={{ backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat', background: 'cover', } }  >
    <Box pad="medium" background="light-3" align="center">
      La previsió meteorologica avui..... <Temps /> 
      </Box>
  <Main
   pad="large"
   align="center"
   >
    <Heading> Acudits </Heading>
      <Paragraph>Preparat per riure</Paragraph>
        <Box
        margin="15px"
        align="center"
        direction="row"
        border={{ color: 'brand', size: 'large' }}
        pad="small"
        >{joke}  
       </Box>
      <Button primary label="Pulsa per veure un acudit !!" onClick={acuditPlus} />
</Main>
      
    </div>
    </div>
  );
}

export default App;