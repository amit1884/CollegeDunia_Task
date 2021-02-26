import React from 'react'
import LeftDetails from './LeftDetails';
import RightDetails from './RightDetails';
function Details({college}) {
   
    return (
        <div className="details_container">
            <LeftDetails college={college}/>
            <RightDetails college={college}/>
        </div>
    )
}

export default Details
