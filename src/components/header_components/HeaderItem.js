import React from 'react'
import { IoAnalytics } from "react-icons/io5";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";

export default function HeaderItem({title, number, secondaryColor}) {
  return (
    <div className={`bg-${secondaryColor} col-lg-3 p-3 rounded m-1`}>

<div className='d-flex justify-content-between '>
  <p className='fs-4'>{ title}</p>
  <TfiLayoutMenuSeparated size={25}/>
</div>
<p className='fs-2 fw-bold'>{number}</p>
<div className='d-flex align-items-center'>
<IoAnalytics size={25}/>
  <p className='my-auto fs-5 mx-2'>+40%</p>
</div>
    </div>
  )
}
