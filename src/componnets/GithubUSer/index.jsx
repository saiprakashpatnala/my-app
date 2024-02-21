import {useState} from "react"

const GithubUserSearch=()=>{
    const[name,setName]=useState("sai")
    const[user,setUser]=useState({})

    const getData=async(val)=>{
        try{
            let response=await fetch(`https://api.github.com/users/${val}`)
            if(response.ok){
                let data=await response.json()
                console.log(data)
                setUser(data)
            }
        }
        catch(e){
            console.log(e.message)
        }

        setName("")

    }
    

    let{login,avatar_url,repos_url}=user
    return(
        <div>
        <input placeholder="enter user name" type="search" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={()=>getData(name)}>Search</button>
        <div>
         <h1>{login}</h1>
         <img src={avatar_url} alt={login}/>
         <a href={repos_url} target="_blank" rel="noreferrer">Blog</a>
         
        </div>
        </div>
    )
}

export default GithubUserSearch