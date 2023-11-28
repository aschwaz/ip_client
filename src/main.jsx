import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Login from './routes/login';
import Businesses from './routes/businesses';
import Biz from './routes/biz';
import Info from './routes/info';
import Lead from './routes/lead';
import Signup from './routes/signup';
import Homepage from './routes/homepage';

const url = "http://localhost:5173"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "businesses",
        element: <Businesses />,
        children: [
          {
            // path: ":bizid", will use this once we have the data to upload
            path: "1",
            element: <Biz />,
            children: [
              {
                path: "info",
                element: <Info />
              },
              {
                path: "lead",
                element: <Lead />
              }
            ]
          }
        ]
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "/",
        element: <Homepage />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
