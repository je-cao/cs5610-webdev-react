import React from "react";
import {findCourseById} from "../Services/CourseService";
import WidgetListContainer from "./WidgetListContainer";
import WidgetList from "../Components/WidgeList";
import {connect} from "react-redux";
import LessonService from "../Services/LessonService";
import LessonTabsComponent from "../Components/LessonTabsComponent";
import ModuleListComponent from "../Components/ModuleListComponent";
import ModuleService from "../Services/ModuleService";
import widgetService from"../Services/WidgetService"
import topicService from"../services/TopicService"
import LessonTabs from"../components.LessonTabsComponent";
class CourseEditorContainer extends React.Component {

class CourseEditorContainer extends React.Component {

  componentDidMount() {
    const courseId = this.props.match.params.courseId
    const moduleId = this.props.match.params.moduleId
    const lessonId = this.props.match.params.lessonId
    const topicId = this.props.match.params.topicId
    this.props.findCourseById(courseId)
    this.props.findModulesForCourse(courseId)
    if(moduleId) {
      this.props.findLessonsForModule(moduleId)
    }
    if(lessonId) {
      this.props.findTopicsForLesson(lessonId)
    }
    if(topicId) {
      this.props.findWidgetsForTopic(topicId)
    }

    // this.props.findAllWidgets()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    debugger
    const courseId = this.props.match.params.courseId
    const moduleId = this.props.match.params.moduleId
    const lessonId = this.props.match.params.lessonId
    const topicId = this.props.match.params.topicId
    if(moduleId !== prevProps.match.params.moduleId) {
      this.props.findLessonsForModule(moduleId)
    }
    if(lessonId !== prevProps.match.params.lessonId) {
      this.props.findTopicsForLesson(lessonId)
    }
    if(topicId) {
      this.props.findWidgetsForTopic(topicId)
    }

  }

  render() {
    return(
      <div>
        <h1>Course Editor</h1>
        <div className="row">
          <div className="col-4">
            <ModuleListComponent/>
          </div>
          <div className="col-8">
            <LessonTabs/>
            <TopicPills/>
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
  findWidgetsForTopic: (topicId) =>
    widgetService.findWidgetsForTopic(topicId)
      .then(widgets => dispatch({
        type: "FIND_WIDGETS_FOR_TOPIC",
        widgets
      })),
  findAllWidgets: () =>
    widgetService.findAllWidgets()
      .then(widgets => dispatch({
        type: "FIND_ALL_WIDGETS",
        widgets
      })),
  findCourseById: (courseId) => findCourseById(courseId)
    .then(actualCourse => dispatch({
      type: "SET_COURSES",
      course: actualCourse
    })),
  findModulesForCourse: (courseId) => moduleService.findModulesForCourse(courseId)
    .then(actualModules => dispatch({
      type: "FIND_MODULES_FOR_COURSE",
      modules: actualModules
    })),
  findLessonsForModule: (moduleId) =>
    lessonService.findLessonsForModule(moduleId)
      .then(lessons => dispatch({
        type: "FIND_LESSONS_FOR_MODULE",
        lessons,
        moduleId
      })),
  findTopicsForLesson: (lessonId) =>
    topicService.findTopicsForLesson(lessonId)
      .then(topics => dispatch({
        type: "FIND_TOPICS_FOR_LESSON",
        topics,
        lessonId
      }))

})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditorContainer)