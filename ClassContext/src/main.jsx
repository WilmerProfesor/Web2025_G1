import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CountProvider } from './Context/countContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountProvider>
      <App />
    </CountProvider>    
  </StrictMode>,
)
