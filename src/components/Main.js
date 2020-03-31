import React from 'react'
import './Main.css';
import pic6 from '../static/images/pic6.jpg'

const Main = () => {

    return (
        <div>
            <div className="Main">
                <div className="show">
                    <img className="img" src="https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149841_1280.jpg" />
                    <button class="btn">Button</button>
                </div>
                <div className="Footer">
                    <p>Hiiiii</p>
                </div>
                {/* <div className="Footer2">
                    <p>Hiiiii</p>
                </div> */}
            </div>
        </div>
    )
}
export default Main;