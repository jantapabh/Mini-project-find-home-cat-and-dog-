import React from 'react'
import './Main.css';
import pic6 from '../static/images/pic6.jpg'

const Main = () => {

    return (
        <div>
            <div className="Main">
                <div className="show">
                    <img className="img" src="https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149841_1280.jpg" />
                    <div className="content">
                        <p className="Param"> " ร่วมเป็นส่วนหนึ่งในการช่วยเหลือสัตว์ไร้บ้าน </p> <br />
                        <p className="Param2"> . . . อย่าปล่อยให้พวกเขาโดเดี่ยว "</p>
                    </div>
                    <button class="btn">
                        <a href="/login" className="link">LOGIN THIS</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Main;