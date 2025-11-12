import React, { useEffect, useState } from 'react'
import { Fashion } from './ccomponents/Fashion';

export const App = () => {

  const[Books,setBooks] = useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>setBooks(data))
  },[])

  return (
    <div>
        {
          Books.map((f,i)=>(
            <Fashion key={i} props={f}/>
          ))
        }
    </div>
  )
}

export default App