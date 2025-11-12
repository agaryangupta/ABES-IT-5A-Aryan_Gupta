import React, { useEffect, useState } from 'react'

export const App = () => {

  const[Fa,SetFa] = useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>SetFa(data))
  },[])

  return (
    <div>App</div>
  )
}
