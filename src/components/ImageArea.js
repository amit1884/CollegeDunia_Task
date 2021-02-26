import React from 'react'
// import img1 from '../assets/college_01.jpg'
import img2 from '../assets/college_02.jpg'
function ImageArea() {
    return (
        <div className="image_container">
            <img src ={img2} alt="" className="college_img"/>
            <div className="overlay"></div>
            <div className="rating"><b>3.9</b>/5<br/>Very Good</div>
            <div className="tag1">Best College 2018</div>
            <div className="tag2">2Km away</div>
            <div className="ranking">#7 in 260 colleges in north campus</div>
        </div>
    )
}

export default ImageArea
