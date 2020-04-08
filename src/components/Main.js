import React, { Component } from 'react'
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBListGroupItem, MDBCard, MDBCardBody, MDBView, MDBMask } from "mdbreact";
import Footer from './Footer'


class Main extends Component {

    constructor(props) {

        super(props)

        this.state = {

            email: "",
            password: " "
        }

    }

    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149841_1280.jpg"
                            style={{ height: 600, width: 900 }}
                        />
                        <Carousel.Caption>
                            <h1>Giving Home Equal Life</h1>
                            <h2>" Be one of the homeless Animals  Don't let them live Alone "</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.pixabay.com/photo/2017/08/07/12/35/cat-2603395_1280.jpg"
                            style={{ height: 600, width: 900 }}
                        />
                        <Carousel.Caption>
                            <h1>Giving Home Equal Life</h1>
                            <h2>" Be one of the homeless Animals  Don't let them live Alone "</h2>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.pixabay.com/photo/2017/06/16/20/51/dog-2410332_1280.jpg"
                            style={{ height: 700, width: 900 }}
                        />
                        <Carousel.Caption>
                            <h1>Giving Home Equal Life</h1>
                            <h2>" Be one of the homeless Animals  Don't let them live Alone "</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <MDBCard className="my-5 px-5 pb-5">
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol lg="5">
                                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                    <img
                                        className="img-fluid"
                                        src="https://www.nobfactory.com/wp-content/uploads/2017/11/%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%88%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94.jpg"
                                        style={{ width: 500, height: 370 }}
                                        alt=""
                                    />
                                    <a href="#!">
                                        <MDBMask overlay="white-slight" />
                                    </a>
                                </MDBView>
                            </MDBCol>
                            <MDBCol lg="7">
                                <a href="#!" className="green-text">
                                    <h6 className="font-weight-bold mb-3">
                                        <MDBIcon icon="dog" className="pr-2" /> Animal
 </h6>
                                </a>
                                <h3 className="font-weight-bold mb-3 p-0">
                                    <strong>CHAUY NONG HAA BAAN</strong>
                                </h3>

                                <Card border="primary" style={{ width: '40rem' }}>
                                    <Card.Header><h3> Raising them ... Don't throw them away</h3></Card.Header>
                                    <Card.Body>

                                        <p className="font">
                                            Giving new life to stray dogs and cats
                                            This website is also a means of finding a home for stray dogs and cats.
                                            Set up by Miss Chanthapapha Thammon, student of the Faculty of Engineering
                                            Department of Computer Engineering with determination and determination.
                                            To help stray dogs and cats in Phuket and beyond to have a better life and a new life
                                            Including finding new homes for them, stray dogs and cats are considered part of society.
                                            An abandoned fox starved with a disease and received a reward from the expedition.
                                            Many people who do not want dogs and cats are left to trust in temples.
                                            These dogs and cats need food, shelter, medical assistance, love and warmth. "
                                       </p>
                                    </Card.Body>
                                </Card>
                                <br />
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}
export default Main;