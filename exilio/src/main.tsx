import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ClassProvider } from './providers/classContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClassProvider>
        <App />
      </ClassProvider>
    </BrowserRouter>
  </React.StrictMode>
)
