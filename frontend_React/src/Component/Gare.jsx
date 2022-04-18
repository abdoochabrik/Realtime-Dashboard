import React from 'react'

export default function Gare(item) {
  return (
        <div className='container2'>
        <img src={item.flag} className="image"/>
         <p className='country'>{item.départ}</p>
         </div>
  )
}
