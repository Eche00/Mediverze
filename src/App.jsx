import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Container from "./component/Container";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Leaderboard from "./pages/Leaderboard";
import Quiz from "./pages/Quiz";
import Profile from "./pages/Profile";
import Signup from "./authentication/Signup";
import Signin from "./authentication/Signin";
import ForgotPassword from "./authentication/ForgotPassword";
import Welcome from "./component/Welcome";
import All from "./coursescomponent/courses/All";
import LevelTwo from "./coursescomponent/courses/LevelTwo";
import LevelThree from "./coursescomponent/courses/LevelThree";
import LevelFour from "./coursescomponent/courses/LevelFour";

function App() {

  return (
    <div className="   h-auto overflow-hidden bg-[#DEEAFD]  ">
        <Routes>
          <Route path="/user" element={<Container />}>
            <Route path="/user/"  element={<Home />} />
            <Route path="/user/courses" element={<Courses />} >
            <Route index element={<All />} />
            <Route path="/user/courses/200l" element={<LevelTwo />} />
            <Route path="/user/courses/300l" element={<LevelThree />} />
            <Route path="/user/courses/400l" element={<LevelFour />} />
            
            </Route>
            <Route path="/user/leaderboard" element={<Leaderboard />} />
            <Route path="/user/quiz" element={<Quiz />} />
            <Route path="/user/profile" element={<Profile />} />
          </Route>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
    </div>
  );
}

export default App;
