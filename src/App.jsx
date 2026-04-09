import './App.css'
import  Home from './Home/Home.jsx'
import  About from './About/About.jsx'
import Parent from './Parent/Parent.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Navbar/Navbar.jsx'
import Footer from './Footer/Footer.jsx'
import Layout from './Layout/Layout.jsx'
function App() {

const router = createBrowserRouter([
    { path: '/', element: <Layout />, children: [ { path: '/', element: <Home /> } ,
                                                  { path: '/about', element: <About /> } ,  
                                                  { path: '/parent', element: <Parent /> }
    ] },
    
  ]);

  return (
   <RouterProvider router={router} />
  )
}


export default App
