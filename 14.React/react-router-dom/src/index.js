/**
 * For convention no standard approach is followed
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate, // Similar to links or Redirect::: It is like stack it adds a stack on the top of the prev route
  Link,
  Outlet, // mount child component under parent component -- It defines preciesly where inside component it shoud appear
  useParams,
  NavLink, // basic Link + (can helps to know the active link)
  useNavigate, //Alternative to history
  useLocation //Gives data present in current location or route
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop.js"

ReactDOM.render(
  <Router>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} /> {/*Add Replace to exit the behavior of stack holding its place*/}
      <Route path="/learn" element={<Learn />} >
        {/**New in React-router-dom v6  i.e nested routes */}
          <Route path="courses" element={<Courses/>}>
            <Route path=":courseID" element={<CourseId/>}/> {/**Using outlet */}
          </Route> {/** /learn/course */}
          <Route path="bundle" element={<Bundles/>}/>
          <Route path="bundle/:courseID" element={<CourseId/>}/>{/**For standalone without using outlet */}
      </Route>
      {/* "/" in the starting of route is optional now */}
      <Route path="app" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);


function Home() {
  return <h1>Hello World</h1>;
}


function Learn() {
  return (
    <>
      <h1>Learn</h1>
      <h4>All Courses are listed here:</h4>
      {/*<a> tag reloads the page
        <Link> dosnt reload the page
      */}
      <Link className="btn btn-success" to="/learn/courses">Courses</Link>
      <Link className="btn btn-primary" to="/learn/bundle">Bundle</Link>
      <Outlet />
    </>
  );
}


function Courses() {
  const courseList = ["React", "Angular", "Vue", "Nodejs"];
  const navigate = useNavigate();
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];
  return<> 
  <h1>Courses</h1>
  <p>More test</p>
      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "pink" : "yellow",
          };
        }}
        to={`/learn/courses/${randomCourseName}`}
      >
        {randomCourseName}
      </NavLink>
      <NavLink className="btn btn-light" to={`/learn/courses/tests`}>
        tests
      </NavLink>
  <Outlet/>

  <button
        onClick={() => {
          navigate("/dashboard");
        }}
        className="btn btn-warning"
      >
        Price
      </button>
  </>;
}


function Bundles() {
  return <h1>Bundles</h1>;
}

function CourseId() {
  const {courseID} = useParams()
  return <h1> URL Params: {courseID} </h1>;
}