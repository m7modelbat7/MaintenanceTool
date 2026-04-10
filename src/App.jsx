import './App.css'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Parent from './Parent/Parent.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Service from './Service/Service.jsx'
import WebDevelopment from './WebDevelopment/WebDevelopment.jsx'
import MobileDevelopment from './MobileDevelopment/MobileDevelopment.jsx'
import UIUXDesign from './UIUXDesign/UIUXDesign.jsx'
import NotFound from './NotFound/NotFound.jsx'
import Movies from './Movies/Movies.jsx'
function App() {

const router = createBrowserRouter([
    { path: '/', element: <Layout />, children: [
                                                  { path: "/", element: <Home /> },
                                                  { path: 'about', element: <About /> },  
                                                  { path: 'parent', element: <Parent /> },
                                                  { path: 'services', element: <Service />, children: [
                                                    { path: 'web-development', element: <WebDevelopment /> },
                                                    { path: 'mobile-development', element: <MobileDevelopment /> },
                                                    { path: 'ui-ux-design', element: <UIUXDesign /> }
                                                  ]},
                                                  { path: 'movies', element: <Movies /> },
                                                  { path: '*', element: <NotFound /> }
    ] },
    
  ]);

  return (
   <RouterProvider router={router} />
  )
}


export default App
