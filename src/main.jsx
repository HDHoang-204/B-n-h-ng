import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'

import Sigin from './pages/sigin/sigin.jsx';
import Cart from './pages/cart/cart.jsx';
import Home from './pages/home/home.jsx';

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:
      [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Sigin",
          element: <Sigin />,
        },
        {
          path: "/Cart",
          element: <Cart />,
        },
      ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers} />
)
