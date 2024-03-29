import React from "react";
import {lessonReducer} from "../reducers/lessonReducer";
import {connect} from "react-redux";
import LessonService from "../Services/LessonService";


const LessonTabs = (
    {
        course,
        moduleId,
        lessons=[],
        createLessonForModule,
        deleteLesson,
        updateLesson
    }) =>
    <div>
        <h1>Lessons ({moduleId})</h1>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                        <li key={lesson._id} className="nav-item">
                            <Link to = {`/edit/${course._id}/modules${module._id}/lessons/$lesson._id`} className="nav-link">
                                <button onClick={() => deleteLesson(lesson._id)}>
                                    <i className="fa fa-times"></i>
                                </button>

                                {
                                    !lesson.editing &&
                                    <span>
                    <button onClick={() =>
                        updateLesson({...lesson, editing: true})
                    }>
                <i className="fa fa-pencil"></i>
              </button>
                                        {lesson.title}
                  </span>
                                }
                                {
                                    lesson.editing &&
                                    <span>
              <button onClick={() =>
                  updateLesson({...lesson, editing: false})}>
                <i className="fa fa-check"></i>
              </button>
                    <input value={lesson.title}/>
                  </span>
                                }
                            </a>
                        </li>
                )
            }
        </ul>
        <button onClick={() => createLessonForModule(moduleId)}>
            Create
        </button>
    </div>

const stateToPropertyMapper = (state) => ({
    course:state.courseReducer.course,
    lessons: state.lessonReducer.lessons,
    moduleId: state.lessonReducer.moduleId
})

const dispatchToPropertyMapper = (dispatch) => ({
    updateLesson: (newLesson) =>
        LessonService.updateLesson(newLesson)
            .then(actuaLesson => dispatch({
                type: "UPDATE_LESSON",
                lesson: actuaLesson
            })),
    deleteLesson: (lessonId) =>
        LessonService.deleteLesson(lessonId)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonId
            })),
    createLessonForModule: (moduleId) =>
        LessonService.createLessonForModule(
            moduleId, {
                title: "New Lesson"
            })
            .then(actualLesson => dispatch({
                type: "CREATE_LESSON_FOR_MODULE",
                lesson: actualLesson
            }))
})

export default connect
(stateToPropertyMapper,
    dispatchToPropertyMapper)
(LessonTabs)