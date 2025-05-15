import {useState} from 'react'
import './Header.css'
import { useContext } from 'react'
import { CountContext } from '../../Context/countContext.jsx'

const Header = (props) => {
  
    const {count, setCount, variable2, increment} = useContext(CountContext)

  const headleIncrement=() => {
    setCount(count + 1)
  }
    return (
    <header>
        Header
        <h1>{count}</h1>
        <button onClick={increment}>
            incrementar
        </button>
        {variable2}
    </header>
  )
}

export default Header