// snippet: rafce

import React from 'react'
import './Header.css'
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
  return (
    <header>
        <GitHubIcon id="iconGit"/>
        <h1>Users of GitHub</h1>
        <h3>Test Aplication</h3>
    </header>
  )
}

export default Header