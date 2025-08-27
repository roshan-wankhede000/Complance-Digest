import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Nav from './component/Nav';
import Login from './component/Login';
import Home from './component/Home';
import Frame from './component/Frame';
import Admin from './component/Admin';
import Footer from './component/Footer';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Ensurance from './component/Ensurance';

function App() {
  let router = createBrowserRouter([
    {
      path:"/",
      element:<><Nav></Nav><Home></Home><Frame></Frame><Footer></Footer></>
    },
    {
      path:"/login",
      element:<><Nav></Nav><Login></Login><Footer></Footer></>
    },
    {
      path:"/admin",
      element:<><Nav></Nav><Admin></Admin><Footer></Footer></>
    },
    {
      path:"/about",
      element:<><Nav></Nav><About></About><Footer></Footer></>
    },
    {
      path:"/services",
      element:<><Nav></Nav><Services></Services><Footer></Footer></>
    },
    {
      path:"/contact",
      element:<><Nav></Nav><Contact></Contact><Footer></Footer></>
    },
    {
      path:"/ensurance",
      element:<><Nav></Nav><Ensurance></Ensurance><Footer></Footer></>
    }
  ])
  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
    </>
  )
}

export default App