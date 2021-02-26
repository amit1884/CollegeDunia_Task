import React ,{useState}from 'react'
import { CollegeList } from './assets/data/CollegeList'
import CollegeCard from './components/CollegeCard'
import {slice,concat} from 'lodash'
function Home() {
    const [Limit,setLimit]=useState(10)
    const [Colleges,setColleges]=useState(slice(CollegeList,0,Limit))
    const [Loading,setLoading]=useState(false)
    const [ShowMore,setShowMore]=useState(true)
    const LoadMore=()=>{
        setLoading(true)
        const newIndex = Limit + 10;
        const newShowMore = newIndex < (CollegeList.length - 1);
        const newList = concat(Colleges, slice(CollegeList, Limit, newIndex));
        setLimit(newIndex);
        setColleges(newList);
        setLoading(false)
        setShowMore(newShowMore);
   }
    return (
        <>
        <div 
        style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
           {
               Colleges.map((items,index)=>{
                   return(
                       <CollegeCard college={items}/>
                   )
               })
           }
        </div>
        {
            ShowMore?
            <div className="load_more">
                <button onClick={LoadMore} >{
                Loading?'Loading...':'Load More'
                }
                </button>
            </div>
            :null
        }
        </>
    )
}

export default Home
