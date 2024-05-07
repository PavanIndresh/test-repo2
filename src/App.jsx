import { useState } from 'react'
import './App.css'
import Dashboard from './Pages/dashboard';
import Login from './Pages/login';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Login/>
      </div>,
    },
    {
      path: "/Home",
      element: <div>
        <Dashboard/>
      </div>,
    },

  ]);


  return (
    <RouterProvider router={router} />
  )
}

export default App
