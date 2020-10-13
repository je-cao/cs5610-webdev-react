import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {createCourse, findAllCourses} from "../Services/CourseService";

class Register extends React.Component{
    render(){
        return(
            <div>
                <h1>Register</h1>
                <div>
                    Username<input placeholder="Enter your username" type="text" className="form-control"/>
                    Password<input placeholder="Enter your password" type="password"className="form-control"/>
                    Verify Password<input placeholder="Enter your password" type="password"className="form-control"/>

                </div>

                <button
                    onClick={this.addCourse}
                    className="form-control btn btn-success">
                    Sign up
                </button>
            </div>
        );
    }
}

export default Register