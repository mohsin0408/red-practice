import React from "react";
import Course from "./Components/Course";
import AllCourses from "./Components/AllCourses";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Components/Store/Store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Link to="/AllCourses" className="text-[#5a05c2] text-lg font-bold ">
            View All Courses
          </Link>
          <Routes>
            <Route path="/" element={<Course />} />
            <Route path="/AllCourses" element={<AllCourses />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
