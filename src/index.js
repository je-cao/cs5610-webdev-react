import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import CourseListComponent from "./Components/CourseListComponent";
import * as serviceWorker from './serviceWorker';
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import {BrowserRouter, Link, Route} from "react-router-dom";
import CourseEditorComponent from "./Components/CourseEditorComponent";
import {CourseManagerComponent} from "./Components/CourseManagerComponent";
import CourseGridComponent from "./Components/CourseGridComponent";

ReactDOM.render(
    <CourseManagerComponent/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
