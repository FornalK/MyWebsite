import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import RootLayout from './routes/RootLayout.jsx'
import AboutPage from './routes/AboutPage.jsx'
import ContactPage from './routes/ContactPage.jsx'
import './index.css'

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {path: '/', element: <App />},
    {path: '/contact', element: <ContactPage />},
    {path: '/about', element: <AboutPage />}
  ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
