import React from 'react'
import tag from '../assets/tag11.png'
function RightDetails({college}) {
    
    // const puretext = text => {
    //     return { __html: text };
    //   };
    return (
        <div className="right_area">
             <div className="original_fees">
             <p><span>&#8377;<strike>{college.original_fees}</strike></span>&nbsp;</p>
             <img src ={tag} alt=""/>
             </div>
             <p id="discounted"><b>&#8377;{college.discounted_fees}</b></p>
             <p id="fee_cycle">{college.fees_cycle}</p>
             <br/><br/>
             <p id="amenties"><span>{college.amenties[0]}</span>&nbsp;&#183;<span>{college.amenties[1]}</span></p>
        </div>
    )
}

export default RightDetails
