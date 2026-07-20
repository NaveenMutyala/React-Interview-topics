import React from "react"
import {createBrowserRouter, createRoutesFromElements, Route,RouterProvider,Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Contact from "./pages/Contact"
import About from "./pages/About"
import RouteLayout from "./layout/RouteLayout"
const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App