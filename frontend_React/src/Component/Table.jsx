import React from 'react'

export default function (data) {
  return (
    <tr className='tr'>
    <td className='td'>{data.depart}</td>
    <td className='td'>{data.arrivee}</td>
    <td className='td'>{data.date}</td>
    <td className='td'>{data.statut}</td>
    <td className='td'>{data.retard}</td>
    </tr>
  )
}
