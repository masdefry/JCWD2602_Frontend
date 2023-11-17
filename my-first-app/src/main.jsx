import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import './Supports/Stylesheets/Utils.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Props from './Pages/Props/Index.jsx';

import App from './App.jsx'

const router = createBrowserRouter([
  { 
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/profile", 
        element: <Profile />
      },
      {
        path: "/props", 
        element: <Props />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
