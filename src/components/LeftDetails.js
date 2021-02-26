import React from 'react'

function LeftDetails({college}) {
    const puretext = text => {
        return { __html: text };
      };
    return (
        <div className="left_area">
        <p id="college_name"><b>{college.college_name}</b>&nbsp;&nbsp;<span id="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span></p>
        <p><span id="nearest_1">{college.nearest_place[0]}</span>|<span id="nearest_2">{college.nearest_place[1]}</span></p>
        <p><span id="match">93% Match :</span><span id="famous_near"dangerouslySetInnerHTML={puretext(college.famous_nearest_places)}/></p>
        <br/><br/>
        <p id="offertext"dangerouslySetInnerHTML={puretext(college.offertext)}/>
       </div>
    )
}

export default LeftDetails
