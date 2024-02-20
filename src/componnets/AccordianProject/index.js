import Item from "./item";


const items = [
  {
    title: "Section 1",
    content: "Content for Section 1",
  },
  {
    title: "Section 2",
    content: "Content for Section 2",
  },
  {
    title: "Section 3",
    content: "Content for Section 3",
  },
];
const Accordian=()=>{
    return(
        <div>
            <h1>Accordian Project</h1>
            <ul>
                {items.map(i=>
                    <Item data={i} key={i.id}/>)}
            </ul>
        </div>
    )
}

export default Accordian