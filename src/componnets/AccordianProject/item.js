import {useState} from "react"

const Item=(props)=>{
    const[toggle,setToggle]=useState(false)
    const {data}=props
    const{title,content}=data
    const toggleHandler=()=>{
        setToggle(!toggle)
    }
    return (
      <li>
        <p>{title}</p>
        <>
          {toggle === true ? (
            <button onClick={toggleHandler}>⬆️</button>
          ) : (
            <button onClick={toggleHandler}>🔽</button>
          )}
        </>
        <>{toggle === true ? <p>{content}</p> : ""}</>
      </li>
    );
}

export default Item