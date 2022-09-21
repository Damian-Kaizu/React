import React,{createRef,useState} from 'react';

const Item=({name,price})=> (
  <li>{name} ${price}</li>
)

const App=props=>{
 
  let [items,setItems]=useState(
    [
      {id:1,name:"Apple" ,price:'1.2'},
      {id:1,name:"Banana",price:'2.2'},

    ]
  );
  const  nameRef=createRef();
  const  priceRef=createRef();

let Add=()=> {
let id=items.length+1;
let name=nameRef.current.value;
let price=priceRef.current.value;
setItems([
  ...items,
  {id,name,price}
]);
}
  return(
    <div>
      <ul>
        
          {items.map(i=>(
           
              <Item key={i.id}
              name={i.name}
              price={i.price}
              />
          ))}
        
       
      </ul>
      <input type="text" ref={nameRef} />
      <input type="text" ref={priceRef} />
      <button type="button" onClick={Add}>Add</button>
    </div>
)
  }

export default App;