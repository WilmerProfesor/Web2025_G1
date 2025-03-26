import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import CardPersonal from './Components/CardPersonal/CardPersonal'

const App=()=> {

  const PI=3.1416;

  return(
    <>    
      <Header/>
      <div className='container'>
        <h1>Hola mundo {PI}</h1>
        <p style={{marginBottom:"20px"}}>Esta es mi App v 0.0.001</p>  
      </div>
      <div id='App-container-cards'>
        <CardPersonal image={"https://estaticos.elcolombiano.com/binrepository/846x565/33c0/780d565/none/11101/UJXN/dambin-98_46143042_20240925181621.jpg"} name={"uno"}/>
        <CardPersonal name={"dos"}/>
        <CardPersonal name={"tres"}/>
      </div>
    </>
  )
}

export default App
