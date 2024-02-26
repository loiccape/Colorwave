import React from 'react'
import { BsDot } from "react-icons/bs";

export default function RecentTicketItem({title, option}) {
  return (
    <div className='d-flex justify-content-between row'>
        <p className='col-7' style={{fontWeight:"500"}}>{title}</p>
        <p className='col-1'><BsDot  /></p>
        <p className='col-4'>{option}</p>
    </div>
  )
}
