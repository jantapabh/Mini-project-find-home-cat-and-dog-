import React from 'react'
import './Main.css';
import pic6 from '../static/images/pic6.jpg'
import { useMediaQuery } from 'react-responsive'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBListGroupItem, MDBCard, MDBCardBody, MDBView, MDBMask } from "mdbreact";

const Main = () => {

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }

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
                                    <MDBIcon icon="utensils" className="pr-2" /> Animal
 </h6>
                            </a>
                            <h3 className="font-weight-bold mb-3 p-0">
                                <strong>CHAUY NONG HAA BAAN</strong>
                            </h3>
                            <p>
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                                nihil impedit quo minus id quod maxime placeat facere possimus,
                                omnis voluptas assumenda est, omnis dolor repellendus et aut
                                officiis debitis.
            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}
export default Main;