import { useState,useEffect } from "react";

const Autocomplete = () => {
  const [name, setName] = useState("");
  const[arr,setArr]=useState([])
  const[showDropDown,setShow]=useState(true)

  useEffect(()=>{
    const getUsers=async()=>{
        try{
            let response=await fetch('https://dummyjson.com/users')
            if(response){
                let data=await response.json()
                setArr(data.users)
            }
        }
        catch(e){
            console.log(e)
        }
    }
    getUsers()

  },[name])

  let filtersUsers=arr.filter((i)=>i.firstName.toLowerCase().includes(name.toLowerCase()))
  const handleName=(k)=>{
    
    setShow(false)
    setName(k)
    setArr([])
    
  }
  return (
    <div>
      <input
        type="search"
        placeholder="enter user name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      {name && filtersUsers.length>0 && showDropDown && <ul>
        {filtersUsers.map(i=>
            <li key={i.id} onClick={()=>handleName(i.firstName)}>
                <p>{i.firstName}</p>
            </li>)}
      </ul>}
     
    </div>
  );
};

export default Autocomplete;
