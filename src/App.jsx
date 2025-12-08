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
import CourseViewer from "./coursescomponent/courses/CourseViewer";

function App() {

  return (
    <div className="h-auto overflow-hidden bg-[#DEEAFD]  ">
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Welcome />} />
          <Route path="home" element={<Home />} />
          <Route path="courses" element={<Courses />} >
            <Route index element={<All />} />
            <Route path="200l" element={<LevelTwo />} />
            <Route path="300l" element={<LevelThree />} />
            <Route path="400l" element={<LevelFour />} />
            <Route path=":level/:courseId" element={<CourseViewer />} />
          </Route>
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
