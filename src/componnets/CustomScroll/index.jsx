import { useState,useEffect } from "react";

const ScrollBar=()=>{
const[arr,setArr]=useState([])
const[loader,setLoader]=useState(true)
const[err,serErr]=useState(null)
const[perc,setPer]=useState(0)

useEffect(()=>{
let getData=async()=>{
    try{
  let response=await fetch("https://dummyjson.com/products?limit=100")
  setLoader(false)
  if(response.ok){
    let data=await response.json()
    setArr(data.products)
  }
    }

    catch(e){
        serErr(e.message)
    }
}
getData()
},[])

const handleScrollPerc=()=>{
    console.log(document.body.scrollTop,document.body.scrollHeight)
}

useEffect(()=>{
    window.addEventListener("scroll",handleScrollPerc)
    return()=>{
        window.removeEventListener('scroll',()=>{})
    }
})

if(loader){
    return <p>Loading.........!</p>
}

else if(err){
    return <p>{err}</p>
}
    return(
     <div>
        <h1>ScrollBar</h1>
        <ul>
            {arr.map(i=>
                <li key={i.id}>
                    <p>{i.title}</p>
                </li>)}
        </ul>
     </div>
    )
}

export default ScrollBar