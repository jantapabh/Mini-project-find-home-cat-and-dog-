import React, { Component } from 'react'
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBListGroupItem, MDBCard, MDBCardBody, MDBView, MDBMask } from "mdbreact";
import Header from './Header'
import ApexChart from './ApexChart'
import Map from './Map'
import ChartOne from './ChartOne'
import ChartTwo from './ChartTwo'


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
                <MDBCardBody>
                        <MDBRow>
                            <MDBCol lg="5">
                                <a href="#!" className="green-text">
                                    <h6 className="font-weight-bold mb-3">
                                        <MDBIcon icon="dog" className="pr-2" size="10px" /> Animal</h6>
                                </a>
                                <h3 className="font-weight-bold mb-3 p-0">
                                    <strong>CHAUY NONG HAA BAAN</strong>
                                </h3>
                                <Card border="primary" style={{ width: '30rem', height: '30rem', padding: 50, margin: 10 }} center>
                                    <ApexChart />
                                </Card>
                            </MDBCol>
                            <MDBCol lg="7">
                                <a href="#!" className="green-text">
                                    <h6 className="font-weight-bold mb-3">
                                        <MDBIcon icon="dog" className="pr-2" size="10px" /> Animal</h6>
                                </a>
                                <h3 className="font-weight-bold mb-3 p-0">
                                    <strong>CHAUY NONG HAA BAAN</strong>
                                </h3>
                                <Card border="primary" style={{ width: '50rem', height: '30rem', padding: 10, margin: 10 }}>
                                    <Map />
                                </Card>
                                <br />
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                <MDBCard className="my-5 px-5 pb-5">
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol lg="5">
                                <Card border="primary" style={{ width: '87rem', height: '25rem', padding: 50, margin: 10, paddingLeft: 50 }} center>
                                    <MDBCardBody center>
                                        <MDBRow center>
                                            <MDBCol lg="4" middle>
                                                <Card>
                                                <ChartOne />
                                                </Card>
                                            </MDBCol >
                                            <MDBCol lg="4" middle>
                                                <Card>
                                                <ChartTwo />
                                                </Card>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCardBody>
                                </Card>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
                <div>
                    <Header />
                </div>

            </div>
        )
    }
}
export default Main;