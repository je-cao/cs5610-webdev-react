import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import CourseListComponent from "./CourseListComponent";
import CourseEditorComponent from "./CourseEditorComponent";
import CourseGridComponent from "./CourseGridComponent";

export class CourseManagerComponent extends React.Component{
    state ={
        course:[]
    }
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div className="container">
                        <Link to="login">Login</Link> |
                        <Link to="register">Register</Link> |
                        <Link to="profile">Profile</Link> |
                        <Link to="courses">Courses</Link> |
                        <Link to="card">Card</Link> |
                        <Link to="editor">Editor</Link>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/profile" exact component={Profile}/>
                        <Route path="/card" exact component={CourseGridComponent}/>
                        <Route path="/editor" exact component={CourseEditorComponent}/>

                        <Route path="/courses" exact>
                            <CourseListComponent courses={this.state.courses} instructor="Jose"/></Route>

                        <Route path="/edit/:courseId"
                               exact
                               component={CourseEditorComponent}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}