import React from 'react'
import './Main.css';
import pic6 from '../static/images/pic6.jpg'
import { useMediaQuery } from 'react-responsive'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel} from 'react-bootstrap';

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
                       
                    />
                    <Carousel.Caption>
                        <h3>Giving home equal Life</h3>
                        <p>Be one of the homeless animals. Don't let them live Alone.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Main;