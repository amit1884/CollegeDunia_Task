import React from 'react'
import Details from './Details';
import ImageArea from './ImageArea';
import promotag from '../assets/TAG.png'
function CollegeCard({college}) {
    return (
        <div className="outer_card_container">
            <div className="main_card_container">
                <img src ={promotag} alt= "" className="promo_tag"/><br/>
                <ImageArea/>
                <Details college={college}/>
            </div>
        </div>
    )
}

export default CollegeCard
