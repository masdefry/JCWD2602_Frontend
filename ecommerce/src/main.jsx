import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// Pages
import Home from './Pages/Home';

import App from './App.jsx'

const router = createBrowserRouter([
  { 
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)