import React from 'react'

const Light = () => {

   const items = ['item1','item2','item3','item4'] 
  return (
   <ul>{items.map((item,index)=>{
        return <li key={index}>{item}</li>
       })}</ul>
       
     
   
  )
}

export default Light