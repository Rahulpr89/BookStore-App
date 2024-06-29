import React from "react";

import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Freebook from "./Components/Freebook";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Course from "./Components/Course";
import Courses from "./courses/Courses";
import Signup from "./Components/Signup";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";


const App = () => {
 
  const [authUser, setAuthUser]=useAuth();
  console.log(authUser);
  return (
       <div >
        {/* <Navbar></Navbar>
        <Banner></Banner>
        <Freebook></Freebook>
        <Footer></Footer> */}
        {/* <Home></Home> */}
        <Routes>
          <Route path="/" element={<Home></Home>}>
          </Route>
          <Route path="/course" element={authUser?<Courses></Courses>:<Navigate to="/signup"/>}>
          </Route>
          <Route path="/signup" element={<Signup></Signup>}>
          </Route>
        </Routes>
        <Toaster></Toaster>
       </div>

  );
};

export default App;
