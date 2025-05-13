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

const router = createBrowserRouter([
  {
    element: <RootLayout />, // Mainly used for Navbar layout
    children: [
      {
        path: "/",
        element: <HomePage />
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

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />
//   },
//   {
//     children: [{path: "/dashboard", element: <DashboardPage />,},{ path: "/dashboard/chats/:id", element: <ChatPage />}],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
