import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from './App.jsx'
import Layout from "./Layout.jsx"
import Page1 from "./Page1.jsx"
const router=createBrowserRouter([
  {
    path:"/",
    element:<Page1/>
  },
])

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
