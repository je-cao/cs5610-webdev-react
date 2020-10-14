import React from "react";
import {findCourseById} from "../Services/CourseService";
import Nav from "react-bootstrap/Nav";
import {faArrowDown, faArrowUp, faHome, faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class CourseEditorComponent extends React.Component {
    state = {
        course:{
            _id:"CS5800",
            title:"Algorithms"
        }
    }

    componentDidMount() {
        console.log(this.props)
        findCourseById(this.props.match.params.courseId)
            .then(actualCourse => this.setState({
                course:actualCourse
            }))
    }

    render(){
        return(
            <div className="container">
                <h1>Course Editor{this.props.match.params.course}</h1>
                <div className="row">
                    <div className="col-4">
                        <div>
                            <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="/home">HTML <FontAwesomeIcon className="float-right" icon={faTimes} /></Nav.Link>
                                <Nav.Link eventKey="link-1">CSS <FontAwesomeIcon className="float-right" icon={faTimes} /></Nav.Link>
                                <Nav.Link eventKey="link-2">JavaScript <FontAwesomeIcon className="float-right" icon={faTimes} /></Nav.Link>
                                <Nav.Link eventKey="link-3" React> <FontAwesomeIcon className="float-right" icon={faTimes} />
                                    Redux
                                </Nav.Link>
                            </Nav>

                        </div>
                    </div>

                    <div className="col-8">
                        <div>
                            <ul className="nav nav-tabs">
                                <li><a className="nav-link" href="#">Tags</a></li>
                                <li><a className="nav-link active" href="#">Elements</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Attributes</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Headings</a></li>
                                <li classNamwe="nav-item"><a className="nav-link" href="#">Tables</a></li>
                            </ul>
                        </div>
                        <br/>

                        <div>
                            <ul className="nav nav-pills">
                                <li className="nav-item"><a className="nav-link active" href="#">Block</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Inline</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Topic 3</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Topic 4</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Topic 5</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">+</a></li>
                            </ul>
                        </div>
                        <br/>

                        <div>
                            <h3>Widgets</h3>
                            <h4>
                                Heading Widgets
                                <span className="float-right">

                <a href="#" className="btn btn-warning">
                    <FontAwesomeIcon icon={faArrowUp} />
                </a>
                <a href="#" className="btn btn-warning">
                    <FontAwesomeIcon icon={faArrowDown} />
                </a>
                <select>
                    <option>Heading</option>
                    <option>youtube</option>
                    <option>Slides</option>
                    <option>List</option>
                </select>
                <a href="#" className="btn btn-danger">
                    <FontAwesomeIcon icon={faTimes} />
                </a>
                        </span>
                            </h4>

                            <input className="form-control" placeholder="Heading Text"/>
                            <select className="form-control">
                                <option>Heading 1</option>
                                <option>Heading 2</option>
                                <option>Heading 3</option>
                                <option>Heading 4</option>
                                <option>Heading 5</option>
                                <option>Heading 6</option>
                            </select>
                            <input className="form-control" placeholder="Heading Text"/>
                        </div>
                    </div>
                    <a className="fa fa-times" href="../index.js"></a>
                </div>
                <i class="fa fa-3x fa-plus-circle pull-right" aria-hidden="true"></i>
            </div>
        )
    }
}