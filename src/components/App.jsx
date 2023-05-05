import React from 'react'
import Home from '../pages/Home'
import Acheivements from '../pages/Acheivements'
import Skills from "../pages/Skills"
import Projects from "../pages/Projects"
import Contact from '../pages/Contact'

import {createBrowserRouter,RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/skills",
    element: <Skills/>
  },
  {
    path: "acheivements",
    element: <Acheivements/>
  },
  {
    path: "/projects",
    element: <Projects/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
])

export default function App() {
  return (

    <>
      <RouterProvider router={router}/>
    </> 

  )
}
