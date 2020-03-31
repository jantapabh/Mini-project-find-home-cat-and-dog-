import React from 'react'
import './Main.css';
import pic6 from '../static/images/pic6.jpg'

const Main = () => {

    return (
        <div>
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
                </div>
            </div>
        </div>
    )
}
export default Main;