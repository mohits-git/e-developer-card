import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import Layout from './components/Layout'
import CreateCard from './components/CreateCard'
import './index.css'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}> 
            <Route path='' element={<App />} />
            <Route path='create' element={<CreateCard />} />
        </Route>
    ) 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
