import React, { Component } from 'react'
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBListGroupItem, MDBCard, MDBCardBody, MDBView, MDBMask } from "mdbreact";
import Header from './Header'
import ApexChart from './Chart/ApexChart'
import ApexChartTwo from './Chart/ApexChartTwo'
import Map from './Chart/Map'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from './Footer'


  

const Main = () => {

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
                        <MDBCol lg="6">
                            <a href="#!" className="green-text">
                                <h6 className="font-weight-bold mb-3">
                                    <MDBIcon icon="dog" className="pr-2" size="3x" /> Animal</h6>
                            </a>
                            <h5 className="font-family-normal mb-3 p-0">
                                <strong style={{ margin: 5}}>กราฟวงกลมแสดงจำนวนสุนัข (ปี 2562 รอบที่ 1)</strong>
                            </h5>
                            <Card border="primary" style={{ width: '42rem', height: '23rem', padding: 30, margin: 10 }} center>
                                <ApexChart />
                            </Card>
                        </MDBCol>
                        <MDBCol lg="5">
                            <a href="#!" className="green-text">
                                <h6 className="font-weight-bold mb-3">
                                    <MDBIcon icon="dog" className="pr-2" size="3x" /> Animal</h6>
                            </a>
                            <h5 className="font-family-normal mb-3 p-0">
                                <strong style={{ margin: 5}}>กราฟวงกลมแสดงจำนวนแมว (ปี 2562 รอบที่ 1)</strong>
                            </h5>
                            <Card border="primary" style={{ width: '42rem', height: '23rem', padding: 30, margin: 10 }} center>
                                <ApexChartTwo />
                            </Card>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol lg="7">
                            <a href="#!" className="green-text">
                                <h6 className="font-weight-bold mb-3">
                                    <MDBIcon icon="dog" className="pr-2" size="3x" /> Animal</h6>
                            </a>
                            <h5 className="font-weight-bold mb-3 p-0">
                                <strong>10 อับดับพื้นที่เกิดโรคพิษสุนัขบ้าสูงสุด 30 วันย้อนหลัง (ตั้งแต่ 11 มีนาคม - 10 เมษายน 2563)</strong>
                            </h5>
                            <Card border="primary" style={{ width: '91rem', height: '30rem', padding: 10, margin: 10 }}>
                                <Map />
                            </Card>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
                <div>
                    <Header />
                </div>
                <div>
                    <Footer />
                </div>

            </div>
        )
    }

export default Main;