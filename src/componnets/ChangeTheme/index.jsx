import {useState} from "react"

import "./index.css"

const ChangeTheme = () => {
    const[toggle,setToggler]=useState(false)
    let name=toggle===true?"light":"dark"
    let buttonTheme=toggle===true?"light-button":"dark-button"
    const toggleHandler=()=>{
        setToggler(!toggle)
    }
  return (
    <div className={name}>
      <h1>Hello World</h1>
      <button className={buttonTheme} onClick={()=>toggleHandler()}>Change Theme!</button>
    </div>
  );
};

export default ChangeTheme;
