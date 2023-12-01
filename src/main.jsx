import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
// import Root, { rootLoader } from "./routes/root";
// import Login, {loginLoader} from './routes/login';
// import Businesses, {businessesLoader} from './routes/businesses';
// import Biz, {bizLoader} from './routes/biz';
// import Info, {infoLoader} from './routes/info';
// import Lead, {leadLoader} from './routes/lead';
// import Signup, {signupLoader} from './routes/signup';
// import Homepage, {homepageLoader} from './routes/homepage';

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
    //loader: rootLoader,
    children: [
      {
        path: "businesses",
        element: <Businesses />,
        //loader: businessesLoader
      },
      { 
        // path: ":bizid", will use this once we have the data to upload
        path: "1",
        element: <Biz />,
        //loader: bizLoader,
        children: [
          {
            path: "info",
            element: <Info />,
            //loader: infoLoader
          },
          {
            path: "lead",
            element: <Lead />,
            //loader: leadLoader
          }
        ]
      },
      {
        path: "login",
        element: <Login />,
        //loader: loginLoader
      },
      {
        path: "signup",
        element: <Signup />,
        //loader: signupLoader
      },
      {
        path: "/",
        element: <Homepage />,
        //loader: homepageLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
