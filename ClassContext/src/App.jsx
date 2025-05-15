import {useState, useContext} from 'react'
import './App.css'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { CountContext } from './Context/countContext.jsx'

const App = () => {

  const {count, setCount, variable2} = useContext(CountContext)
  return (
    <>
    
        <Header />
        <main>
          App: {count}
          <h1>{variable2}</h1>
        </main>
        <Footer />   
      
    
    </>
  )
}

export default App