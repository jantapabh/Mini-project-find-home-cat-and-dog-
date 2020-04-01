import React from 'react'
import './Main.css';
import pic6 from '../static/images/pic6.jpg'
import { useMediaQuery } from 'react-responsive'
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
      }

    return (
        <div>
            {/* <Desktop>
            <div className="h">
            </div>
            <div className="Main">
                <div className="show">
                    <img className="img" src="https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149841_1280.jpg" />
                    <div>
                        <p className="Param"> " Be a part in helping homeless animals </p> <br />
                        <p className="Param2">Don't let them do it alone "</p>  <br />
                    </div>
                    <div>
                        <h1 className="Param3">. . . Giving Home Equal Life . . .</h1>
                    </div>
                    <button class="btnForm">
                        <a href="/login" className="link">LOGIN THIS</a>
                    </button>
                    <div className="hh">
                        COntent
                    </div>
                </div>
            </div>
           </Desktop> */}
        </div>
    )
}
export default Main;