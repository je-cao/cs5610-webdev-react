import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import CourseListComponent from "./Components/CourseListComponent";
import * as serviceWorker from './serviceWorker';
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import CourseEditorComponent from "./containers/CourseEditorContainer";
import{CourseManagerComponent} from "./Components/CourseManagerComponent";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import Counter from "./Components/Counter";
import CounterContainer from "./containers/CounterContainer";
import fsm from "./reducers/fsm"
import widgetsReducer from "./reducers/widgetsReducers";
import moduleReducer from "./reducers/moduleReducer";
import courseReducer from "./reducers/courseReducer";
import {lessonReducer} from "./reducers/lessonReducer";
import {topicReducer} from "./reducers/topicReducer";
import "font-awesome/css/font-awesome.min.css"
import Login from "./Components/Login";

const reducers = combineReducers({
    fsm, widgetsReducer, moduleReducer, courseReducer, lessonReducer, topicReducer
})
const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <CourseManagerComponent/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

