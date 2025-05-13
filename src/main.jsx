import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./routes/homepage/Homepage";
import DashboardPage from "./routes/dashboardPage/DashboardPage";
import ChatPage from "./routes/chatPage/ChatPage";
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx';
import SignInPage from './routes/signInPage/SignInPage.jsx';
import SignUpPage from './routes/signUpPage/SignUpPage.jsx';

const router = createBrowserRouter([
  {
    element: <RootLayout />, // Mainly used for Navbar layout
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          { 
            path: "/dashboard/chats/:id", 
            element: <ChatPage />
          }
        ]
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
