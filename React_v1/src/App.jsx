import './App.css';
import BotonPersonalizado from "./Components/BotonPersonalizado/BotonPersonalizado";
import Header from './Components/Header/Header';
import CardPersonal from './Components/CardPersonal/CardPersonal';

function App() {


  return (


    <>
      <Header/>
      <h1>Test</h1> 
      <BotonPersonalizado/>     
      <BotonPersonalizado/>     
      <BotonPersonalizado/>     
      <BotonPersonalizado/>     
      <BotonPersonalizado/> 
      <CardPersonal nombre={"Uno"}/>          
      <CardPersonal nombre={"DOs"}/>    
      <CardPersonal nombre={"Tres"}/>          
    </>
  )
}

export default App
