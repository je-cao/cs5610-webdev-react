import React from 'react';
import CourseCardComponent from "./CourseCardComponent";
import {Container, Card, Button } from 'react-bootstrap';


const CourseGridComponent = () => {
    return (
        <div className="container">
            <h1>
                Course Manager <input placeholder="New Course Title" /> <button className="btn-dark"> + </button>
            </h1>
            <table className="table">
                <thead>
                <tr>
                    <th>Recent Document</th>
                    <th>Owned by me</th>
                </tr>
                </thead>
            </table>

            <div className="row">
                <div className="col-xs-1 col-sm-2 col-md-3 col-lg-4 col-xl-6 ">
                    <div className="card">
                        <Card.Body>
                            <Card.Img variant="top d-flex" src="https://picsum.photos/200/300"/>
                            <Card.Title>Web Development</Card.Title>
                            <Button variant="primary">Edit</Button>
                        </Card.Body>
                    </div>
                </div>
                <div className="cal-12 col-xs-1 col-sm-2 col-md-3 col-lg-4 col-xl-6 ">
                    <div className="card">
                        <Card.Body>
                            <Card.Img variant="top d-flex" src="https://picsum.photos/200/300"/>
                            <Card.Title>Web Development</Card.Title>
                            <Button variant="primary">Edit</Button>
                        </Card.Body>
                    </div>
                </div>
                <div className="cal-12 col-xs-1 col-sm-2 col-md-3 col-lg-4 col-xl-6 ">
                    <div className="card">
                        <Card.Body>
                            <Card.Img variant="top d-flex" src="https://picsum.photos/200/300"/>
                            <Card.Title>Web Development</Card.Title>
                            <Button variant="primary">Edit</Button>
                        </Card.Body>
                    </div>
                </div>
                <div className="cal-12 col-xs-1 col-sm-2 col-md-3 col-lg-4 col-xl-6 ">
                    <div className="card">
                        <Card.Body>
                            <Card.Img variant="top d-flex" src="https://picsum.photos/200/300"/>
                            <Card.Title>Web Development</Card.Title>
                            <Button variant="primary">Edit</Button>
                        </Card.Body>
                    </div>
                </div>
                <div className="cal-12 col-xs-1 col-sm-2 col-md-3 col-lg-4 col-xl-6 ">
                    <div className="card">
                        <Card.Body>
                            <Card.Img variant="top d-flex" src="https://picsum.photos/200/300"/>
                            <Card.Title>Web Development</Card.Title>
                            <Button variant="primary">Edit</Button>
                        </Card.Body>
                    </div>
                </div>
                <div className="cal-12 col-xs-1 col-sm-2 col-md-3 col-lg-4 col-xl-6 ">
                    <div className="card">
                        <Card.Body>
                            <Card.Img variant="top d-flex" src="https://picsum.photos/200/300"/>
                            <Card.Title>Web Development</Card.Title>
                            <Button variant="primary">Edit</Button>
                        </Card.Body>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CourseGridComponent;