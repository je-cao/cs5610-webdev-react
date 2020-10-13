import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {findAllCourses, updateCourse, deleteCourse, createCourse} from "../Services/CourseService";


class CourseListComponent extends React.Component{

    state = {
        courses: [],
        courseBeingEdited:{}
    }

    componentDidMount() {
        findAllCourses()
            .then(courses => {
                this.setState({
                        courses: courses
                })
            })
    }

    deleteCourse = (course) => {
        deleteCourse(course._id)
            .then(status => this.setState(prevState => ({
                courses:prevState.courses.filter(c => c._id !== course._id)})
            ))
    }

    addCourse = () => {
        const newCourse = {
            title:"new Course",
            owner:"me",
            modified:(new Date()).toDateString()
        }

        createCourse(newCourse)
            .then(actualCourse => this.setState(prevState => ({
                courses: [
                    ...prevState.courses, newCourse
                ]
            })))
    }

    editCourse = (course) =>{
        this.setState({
            courseBeingEdited: course
            })
    }


    render(){
        return(
            <div>
                <h1>Course List(for {this.props.instructor}) {this.props.term}</h1>
                <input className="form-control"/>
                <table className="table">
                    {
                        this.state.courses.map(course =>
                            <CourseRowComponent
                                courseBeingEdited={this.state.courseBeingEdited}
                                editCourse={this.editCourse}
                                deleteCourse={this.deleteCourse}
                                course={course}/>
                        )
                    }
                </table>
                <button
                    onClick={this.addCourse}
                    className="btn btn-success">
                    Add Course
                </button>
            </div>
        );
    }
}

export default CourseListComponent;