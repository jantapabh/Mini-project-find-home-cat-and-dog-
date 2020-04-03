import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon, MDBLink } from 'mdbreact';
import { findByLabelText } from '@testing-library/react';


const Contact = () => {

    return (
        <div>
            <MDBRow center>
                <MDBCol md='4'>
                    <MDBCard>
                        <MDBCardImage
                            hover
                            overlay='white-light'
                            className='card-img-top'
                            src='https://scontent.fhdy2-1.fna.fbcdn.net/v/t1.0-9/32089429_1813031982097084_7269104841354379264_o.jpg?_nc_cat=110&_nc_sid=174925&_nc_ohc=Bi4H4vO5YVoAX_NW-fg&_nc_ht=scontent.fhdy2-1.fna&oh=805262156374d2b4381c9c535fb9518f&oe=5EAAF717'
                            alt='woman'
                            style={{ width: 500, height: 450}}

                        />

                        <MDBCardBody cascade className='text-center'>
                            <MDBCardTitle className='card-title'>
                                <strong>JANTAPA  BINHEEM</strong>
                            </MDBCardTitle>

                            <p className='font-weight-bold blue-text'>Web Developer</p>

                            <MDBCardText>
                               แรงบันดาลใจในการส้รางเว็บไซต์นี้เพื่อช่วยเหลือสัตว์ไร้บ้าน.{' '}
                            </MDBCardText>
                            
                            <MDBCardText>
                               <h4>THANK YOU</h4>
                            </MDBCardText>

                            <MDBCol md='12' className='d-flex justify-content-center'>
                                <MDBBtn rounded floating color='fb'>
                                 <MDBIcon size='lg' fab icon='facebook-f' /> 
                             
                                </MDBBtn>

                                <MDBBtn rounded floating color='tw'>
                                    <MDBIcon size='lg' fab icon='twitter'></MDBIcon>
                                </MDBBtn>

                                <MDBBtn rounded floating color='dribbble'>
                                    <MDBIcon size='lg' fab icon='dribbble'></MDBIcon>
                                </MDBBtn>
                            </MDBCol>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
    )
}

export default Contact;