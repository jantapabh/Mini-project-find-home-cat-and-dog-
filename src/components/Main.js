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
                        style={{ height: 600, width: 900}}
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
                        style={{ height: 600, width: 900}}
                    />
                    <Carousel.Caption>
                        <h1>Giving Home Equal Life</h1>
                        <h2>" Be one of the homeless Animals  Don't let them live Alone "</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Main;