import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import Pages
import Home from './Pages/Home';
import Login from './Pages/Login/Index.jsx';
import Todos from './Pages/Todos/Index.jsx';

// Setup React Router DOM
// 1. Import:
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

// 2. Define Route Path:
// const route = createBrowserRouter([
//   {
//     path: '/', 
//     element: <Home />
//   },
//   {
//     path: '/login', 
//     element: <Login />
//   }
// ])

const route = createBrowserRouter([
  {
    element: <App />, 
    children: [
      {
        path: '/', 
        element: <Home />
      },
      {
        path: '/login', 
        element: <Login />
      },
      {
        path: '/todos', 
        element: <Todos />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={route} />
)
