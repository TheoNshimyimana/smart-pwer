import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import LoaderBlank from './pages/LoaderBlank.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
{/*     <LoaderBlank /> */}
  </StrictMode>,
)
