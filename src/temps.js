import React, { useState, useEffect } from 'react'


function Temps() {

  const [temps, setTemps] = useState([]);
  
  useEffect(() => {
          
          response();
         
          }, []);
     
  const response = async () => {

    const data = await fetch("https://api.aerisapi.com/observations/barcelona,spain?client_id=4lUHkGWiB25c1NJQf1A89&client_secret=s2eHUnEzz9TpgoHqbn9h5D3WN5LUSrB8E0zhaOcz", {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
    let resultat = await data.json();
    
    
    setTemps(resultat.response.ob.weather);
  }
  
  return (
    <div>
        {
          temps
        }
    </div>
  )
}
export default Temps;

