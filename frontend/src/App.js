import React from "react";

import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Freebook from "./Components/Freebook";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Course from "./Components/Course";
import Courses from "./courses/Courses";
import Signup from "./Components/Signup";

const App = () => {
 

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
          <Route path="/course" element={<Courses></Courses>}>
          </Route>
          <Route path="/signup" element={<Signup></Signup>}>
          </Route>
        </Routes>
       </div>

  );
};

export default App;
