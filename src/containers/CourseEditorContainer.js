import React from "react";
import {findCourseById} from "../Services/CourseService";
import WidgetListContainer from "./WidgetListContainer";
import WidgetList from "../Components/WidgeList";
import {connect} from "react-redux";
import LessonService from "../Services/LessonService";
import LessonTabsComponent from "../Components/LessonTabsComponent";
import ModuleListComponent from "../Components/ModuleListComponent";
import ModuleService from "../Services/ModuleService";
class CourseEditorContainer extends React.Component {

    componentDidMount() {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        if(moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const moduleId = this.props.match.params.moduleId
        if(moduleId !== prevProps.match.params.moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
    }

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-4 btn">
                        <ModuleListComponent/>
                    </div>
                    <div className="col-8">
                        <LessonTabsComponent/>
                        <WidgetList/>
                    </div>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    findCourseById: (courseId) => findCourseById(courseId)
        .then(actualCourse => dispatch({
            type: "SET_COURSES",
            course: actualCourse
        })),
    findModulesForCourse: (courseId) => ModuleService.findModulesForCourse(courseId)
        .then(actualModules => dispatch({
            type: "FIND_MODULES_FOR_COURSE",
            modules: actualModules
        })),
    findLessonsForModule: (moduleId) =>
        LessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons,
                moduleId
            }))
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditorContainer)