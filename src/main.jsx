import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { initAnimations } from 'motion-tokens'
import './index.css'
import App from './App.jsx'

ScrollTrigger.defaults({ scroller: '#scroll-root' })
initAnimations({ defaultDuration: 0.6, blur: 6, movement: 30 })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
