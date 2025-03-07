import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  var Roll =  Math.floor(Math.random() * 151) + 1 ;
 
  return (
    <>
     
     <h1>Pokeman: { Roll } </h1><Button  onClick= {() => window.location.reload(false)} as="a" variant="primary">
        A New Pokemon
      </Button>
     <div>
     <img src= {"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + Roll + ".png" } />
     
      
      </div>
  </>
  )
}

export default App;
