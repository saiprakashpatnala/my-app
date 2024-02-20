import { useState, useEffect } from "react";
import './index.css'

const MoreProducts = () => {
  const [arr, setArr] = useState([]);
  const [limit, setLimit] = useState(20);
  
  const getData = async (kk) => {
   
    try {
      let response = await fetch(
        `https://dummyjson.com/products?limit=${kk}`
      );
      if (response.ok) {
        let data = await response.json();
        setArr(data.products);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const moreData=()=>{
    if(limit>=20 && limit<=100){
        setLimit(limit+20)
        getData(limit)
    }
  }
  useEffect(() => {
    getData(limit);
  }, [limit]);


  console.log(arr)
 


  return(<>
  <h1>Shopping</h1>
  {arr.length>0? <ul className="products-con">
    {arr.map(i=>
        <li key={i.id}>
         <h1>{i.brand}</h1>
         <p>{i.category}</p>
         <p>{i.description}</p>
         <span>{i.discountPercentage}</span>
         <ul className="products-con">
            <li className="kk">
                {i.images.map((i)=>
                <img src={i} alt="imge"/>)}
            </li>
         </ul>
         <img src={i.thumbnail} alt={i.title}/>
        </li>)}
  </ul>:""}
  {limit===100 ?"":<button onClick={moreData}>Moreoptions</button>}
  </> );
};

export default MoreProducts;
