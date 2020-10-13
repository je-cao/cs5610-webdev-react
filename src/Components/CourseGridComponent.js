import React from 'react';
import CourseCardComponent from "./CourseCardComponent";
import {Container, Card, Button } from 'react-bootstrap';


const CourseGridComponent = () => {
    return (
        <div>
            <div className="card-deck">
                <h1>
                    Course Manager <input placeholder="New Course Title" /> <button className="btn-dark"> + </button>
                </h1>

                <table className="table">
                    <thead>
                    <tr className="wbdv-button">
                        <th>Recent Document</th>
                        <th>Owned by me</th>
                    </tr>
                    </thead>
                </table>

                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top d-flex" src="https://picsum.photos/200/300"/>
                    <Card.Body>
                        <Card.Title>Web Development</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Edit</Button>
                    </Card.Body>
                </Card >

                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top d-flex" src="https://picsum.photos/200/300"/>
                    <Card.Body>
                        <Card.Title>Database Management</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Edit</Button>
                    </Card.Body>
                </Card >

                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top d-flex" src="https://picsum.photos/200/300"/>
                    <Card.Body>
                        <Card.Title>Data Structure</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Edit</Button>
                    </Card.Body>
                </Card >

            </div>

            <div className="card-deck">
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top d-flex" src="https://picsum.photos/200/300"/>
                    <Card.Body>
                        <Card.Title>Web Development</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Edit</Button>
                    </Card.Body>
                </Card >

                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top d-flex" src="https://picsum.photos/200/300"/>
                    <Card.Body>
                        <Card.Title>Database Management</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Edit</Button>
                    </Card.Body>
                </Card >

                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top d-flex" src="https://picsum.photos/200/300"/>
                    <Card.Body>
                        <Card.Title>Data Structure</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Edit</Button>
                    </Card.Body>
                </Card >

            </div>
        </div>

    )
}

export default CourseGridComponent;