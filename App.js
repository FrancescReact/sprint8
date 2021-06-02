
import './App.css';

import { Box,Button,Main,Heading,Paragraph } from 'grommet';

import React, { useState } from 'react'
import background from "./group.jpg";

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
    <div  class = "contentMain" style={{ backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat', background: 'cover', } }  >
      <Main pad="auto">
  <Heading>Acudits</Heading>
  <Paragraph>Preparat per riure</Paragraph>

  <Box
        direction="row"
        border={{ color: 'brand', size: 'large' }}
        pad="medium"
      >{joke}
        <Box pad="small" background="dark-3" />
        <Box pad="medium" background="light-3" />
      </Box>
      <Button primary label="Pulsa per veure un acudit !!" onClick={acuditPlus} />
</Main>
      
    </div>
  );
}

export default App;
