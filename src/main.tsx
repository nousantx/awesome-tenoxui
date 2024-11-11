import { createRoot } from 'react-dom/client'
import { Routes } from '@generouted/react-router'
import '@/styles/index.css'
import 'remixicon/fonts/remixicon.css'
import { ThemeProvider } from './contexts/ThemeProvider'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <Routes />
  </ThemeProvider>
)
