import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from './Redux/store.ts'
import './index.css'
import App from './App.tsx'
import { router } from './Router/routes.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
    
  </Provider>
)
