import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {createCourse, findAllCourses} from "../Services/CourseService";

class Login extends React.Component{
    render(){
        return(
            <div>
                <h1>Login</h1>
                <div>
                Username<input placeholder="Enter your username" type="text" className="form-control"/>
                Password<input placeholder="Enter your password" type="password"className="form-control"/>

                </div>

                <button
                    onClick={this.addCourse}
                    className="form-control btn btn-success">
                    Log in
                </button>

                <button
                    onClick={this.addCourse}
                    className="form-control btn btn-primary">
                    Sign up
                </button>
            </div>
        );
    }
}

export default Login