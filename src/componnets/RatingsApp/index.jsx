import {useState} from "react"
import {FaStar} from "react-icons/fa"

const Ratings=({noOfStars})=>{
    const[index,setIndex]=useState(0)
    let starsArray=Array.from({length:noOfStars})
    const indexHandler=(k)=>{
     setIndex(k)
     console.log(index)
    }
    const Hover=(l)=>{
        setIndex(l)
        console.log(index)
    }
    return(
        <div>
            <h1>Ratings App</h1>
            {starsArray.map((_,index)=>
            <FaStar key={index} onClick={()=>indexHandler(index)} onMouseMove={Hover(index)}/>
           )}
            
        </div>
    )
}

export default Ratings