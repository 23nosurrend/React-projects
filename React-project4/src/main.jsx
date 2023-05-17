import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from './App.jsx'
import Layout from "./Layout.jsx"
import Page1 from "./Page1.jsx"
import Page2 from "./Page2.jsx"
import './index.css'
const router=createBrowserRouter([
  {
    path:"/home",
    element:<App/>
  },

  {
    path:"/page1",
    element:<Page1/>
  },
  {
    path:"/page2",
    element:<Page2/>
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
    router={router}    />
  </React.StrictMode>,
)
