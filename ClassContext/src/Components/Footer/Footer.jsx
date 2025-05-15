import React from 'react'
import './Footer.css'
import { useContext } from 'react'
import { CountContext } from '../../Context/countContext.jsx'

const Footer = () => {
    const {count} = useContext(CountContext)
  return (
    <footer>Footer
        count: {count}
    </footer>
  )
}

export default Footer