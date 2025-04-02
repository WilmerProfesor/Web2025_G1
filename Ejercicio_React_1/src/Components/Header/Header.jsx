import {useState, useEffect} from 'react'
import "./Header.css";

const Header = () => {

  const [counter, setCounter] = useState(0);
  
  useEffect(()=>{
    console.log("Contador Actualizado"+counter);        
    // setCounter(counter+1); si activa esta línea el useEffect se dispara infinitamente
  })

  useEffect(()=>{
    console.log("Se cargó la página"+counter);          
  },[]) // este useEffect se dispara al cargar por primera vez la pág
  
  useEffect(()=>{
    console.log("Algo pasó con el estado");          
  },[counter]) // este useEffect se dispara al cargar por primera vez la pág


  const handleIncrement=()=>{
    setCounter(counter+1);    
  }

  const handleDecrement=()=>{
    setCounter(counter-1);    
  }

  return (
    <header>
        <h1>Test Image</h1>
        <div id='header-counter'>
            {counter} img
        </div>
        <button onClick={handleIncrement}>Incrementar</button>
        <button onClick={handleDecrement}>Decrementar</button>
        <p>Testing image for React</p>
    </header>
  )
}

export default Header