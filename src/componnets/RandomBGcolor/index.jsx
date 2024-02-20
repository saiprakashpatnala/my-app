import {useState} from "react"

const RandomBgcolor=()=>{
    const[colour,setColor]=useState("#000000")
    const[typeofColor,setTypeofColor]=useState("hex")

    let utilityRandom=(length)=>{
   return Math.floor(Math.random()*length)
    }

    const generateHexcolr=()=>{
        setTypeofColor("hex")
        const hex=[1,2,3,4,5,6,"A","B","C","D","E","F"]
       let k="#"
        for(let i=0;i<6;i++){
            k+=hex[utilityRandom(hex.length)]
        }
        setColor(k)

    }

    const generateRgbcolr=()=>{
        setTypeofColor("rgb")
        let r=utilityRandom(256)
        let g=utilityRandom(256)
        let b=utilityRandom(256)
        let m=`rgb(${r},${g},${b})`
        setColor(m)
    }

    const generateRandomColr=()=>{
        setTypeofColor("random")
        let arr=[1,2,3,4,5,6,"A","B","C","D","E","F"]
        let v="#"
        for(let i=0;i<6;i++){
            v+=arr[utilityRandom(arr.length)]
            console.log(v)
        }
        
        setColor(v)
    }

    const finalRender=()=>{
        switch(typeofColor){
            case("hex"):
            return(
                <div style={{color:"#ffffff",backgroundColor:colour}}>
                  <p>hex{colour}</p>
                </div>
            )
          
             case("rgb"):
            return(
                <div style={{color:"#ffffff",backgroundColor:colour}}>
                  <p>{colour}</p>
                </div>
            )
           
             case("random"):
            return(
                <div style={{color:"#ffffff",backgroundColor:colour}}>
                  <p>random{colour}</p>
                </div>
            )
    

                default:
                    console.log("Invalid")
        }
    }
    return(
        < div style={{height:"100vh",width:"100vw",backgroundColor:colour}}>
        <button onClick={()=>generateHexcolr()}>create HEX colour</button>
        <button onClick={()=>generateRgbcolr()} >create RGB colour</button>
        <button onClick={()=>generateRandomColr()} >create Random colour</button>
        <div>
            {finalRender()}
        </div>
        </div>

    )
}

export default RandomBgcolor