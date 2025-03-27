import React, { useEffect, useState } from 'react'

export default function Getdata() {

   const[data,setData]=useState([])

   useEffect(()=>{
       const getdata= async ()=>{
        try {
            const url='https://dummyjson.com/products'
            let respone= await fetch (url)
            let product= await respone.json()
            console.log(product)
            setData(product.products)
            
        } catch (error) {
            console.log(error)
        }
       }
      getdata()
   },[])
   
   const filterData=data.filter((item)=> (
    item.price>250
   ))
   
 
  return (
    <div>
      <ul>{
        filterData.map((item)=>(
           <li key={item.id}>
           <p>{item.title}</p>
           <p>{item.availabilityStatus}</p>
           <p>{item.brand}</p>
           <p>{item.category}</p>
           <p>{item.price}</p>
           </li>
           
        ))}
        </ul>

    </div>
  )
}
