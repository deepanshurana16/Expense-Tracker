import React from "react";
import { Routes,Router,Outlet } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import headerlogo from "./Assets/headerlogo.png";
import Home from "./Components/Home";
import About from "./Components/About";
import Profile from "./Components/Profile";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


const App =()=>{
  return(
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="body">
      <Outlet />
      </div>
      <div className="footer">
      <Footer />
      </div>
    </div>
  )
};


export const appRouter = createBrowserRouter([
  {
    path:"/",
    element : <App />,
    children : [
      {
        path: "/",
        element : <Home />,
      },
      {
        path:"/about",
        element : <About />
      },
      {
        path:"/profile",
        element : <Profile />
      }
    ]

}
])

export default App;