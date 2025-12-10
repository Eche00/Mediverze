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
import LevelPage from "./coursescomponent/courses/LevelPage";
import SemesterPage from "./coursescomponent/courses/SemesterPage";
import CoursePage from "./coursescomponent/courses/CoursePage";
import PdfViewer from "./coursescomponent/courses/PdfViewer";

function App() {

  return (
    <div className="h-auto overflow-hidden bg-[#DEEAFD]  ">
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Welcome />} />
          <Route path="home" element={<Home />} />
          <Route path="courses" element={<Courses />}>

            <Route path=":level" element={<LevelPage />} />
            <Route path=":level/:semester" element={<SemesterPage />} />
            <Route path=":level/:semester/:courseId" element={<CoursePage />} />
            <Route path=":level/:semester/:courseId/:pdfId" element={<PdfViewer />} />
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
