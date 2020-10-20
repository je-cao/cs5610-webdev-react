import React from "react";
import {connect} from "react-redux";

import {Link} from "react-router-dom";
import ModuleService from "../Services/ModuleService";
import {Nav} from "react-bootstrap";

const ModuleListComponent = (
    {
        course={},
        modules=[],
        deleteModule,
        createModule,
        updateModule,
        edit,
        ok,
    }) =>
    <div>
        <h5 className="container" >Modules for {course.title}</h5>
        <ul className="pills" className="flex-column">
            {
                modules.map(module =>
                        <li key={module._id}>
                            <button className= "float-right fa fa-times"
                                onClick={() => deleteModule(module)}>
                            </button>
                            {
                                !module.editing &&
                                <span>
                  <button onClick={() => edit(module)}>
                    <i className="fa fa-pencil"></i>
                  </button>
                  <Link to={`/edit/${course._id}/modules/${module._id}`}>
                    {module.title}
                  </Link>
                </span>
                            }
                            {
                                module.editing &&
                                <span>
                <button
                    onClick={() => ok(module)}>
                  Ok
                </button>
                <input
                    onChange={(event) => updateModule({
                        ...module,
                        title: event.target.value
                    })}
                    value={module.title}/>
              </span>
                            }
                        </li>
                )
            }
        </ul>
        <button onClick={() => createModule(course)}>
            <i className="fa fa-plus"></i>
        </button>
    </div>

// export default ModuleListComponent

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules,
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    ok: (module) =>
        ModuleService.updateModule(module._id, {
            ...module, editing: false
        }).then(status => dispatch({
            type: "UPDATE_MODULE",
            module: {...module, editing: false}
        })),
    edit: (module) =>
        ModuleService.updateModule(module._id, {
            ...module, editing: true
        }).then(status =>
            dispatch({
                type: "UPDATE_MODULE",
                module: {...module, editing: true}
            })),
    deleteModule: (module) =>
        ModuleService.deleteModule(module._id)
            .then(status => dispatch({
                type: "DELETE_MODULE",
                module: module
            })),
    createModule: (course) =>
        ModuleService.createModuleForCourse(course._id, {
            title: "New Module"
        }).then(actualModule => dispatch({
            type: "CREATE_MODULE",
            module: actualModule
        })),
    updateModule: (module) =>
        dispatch({
            type: "UPDATE_MODULE",
            module: module
        })
})

export default connect
( stateToPropertyMapper,
    propertyToDispatchMapper)
(ModuleListComponent)