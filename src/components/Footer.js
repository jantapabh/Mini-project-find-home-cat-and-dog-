import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";


const Footer = () => {

    return (
    
            <MDBFooter color="black" className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="1.5">
                          <img src="https://www.posn.or.th/wp-content/uploads/2019/01/psu-logo.png"  style={{ width: 200, height: 150}}/>
                        </MDBCol>  
                        <MDBCol md="4">
                          <img src="https://www.phuket.psu.ac.th/wp-content/uploads/2019/03/cropped-PSU_PHUKET-EN.png"  style={{ width: 250, height: 150}}/>
                        </MDBCol>
                        <MDBCol md="4">
                            <h5 className="title">Links</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">Link 1</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 2</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 3</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-5 ">
                    <MDBContainer fluid>
                    <MDBIcon far icon="envelope" size="3x"/>
                    </MDBContainer>
                    <MDBContainer fluid>
                    <MDBIcon icon="phone-volume" size="3x" />
                    </MDBContainer>
                </div>
            </MDBFooter>
      
    )
}

export default Footer