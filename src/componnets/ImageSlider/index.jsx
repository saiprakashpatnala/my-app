import { useState,useEffect } from "react";

const ImageSlider=()=>{
    const[arr,setArr]=useState([])
    const[index,setIndex]=useState(0)
    const[err,setErr]=useState(null)
    const[loader,setLoader]=useState(true)

    useEffect(()=>{
        const fetchImages=async()=>{
            setLoader(false)
            try{
            let response=await fetch('https://picsum.photos/v2/list?page=1&limit=5')
            if(response.ok){
                let data=await response.json()
                setArr(data)
            }
            }
            catch(e){
                console.log(e.message)
                setErr(e.message)
            }
        }
        fetchImages()
    },[])

    const increment=()=>{
        if(index>=0 && index<arr.length-1){
            setIndex(index+1)
        }
        console.log(index)
    }
    const decrement=()=>{
        if(index>0){
            setIndex(index-1)
        }
        console.log(index)
    }

let imageUrl
    if(err!==null){
        return <p>{err}</p>
    }
    if(loader){
        return <p>Loading...........!</p>
    }
    if (arr.length > 0 && index >= 0 && index < arr.length && arr[index] && arr[index].download_url) {
    imageUrl = arr[index].download_url;
}
console.log(arr[index])
    
    return(
       <div>
     <button onClick={()=>increment()}>▶️</button>
      <img style={{height:"100px",width:"100px"}} src={imageUrl} alt="name"/> 
     <button onClick={()=>decrement()}>◀️</button>
       </div>
    )
}

export default ImageSlider