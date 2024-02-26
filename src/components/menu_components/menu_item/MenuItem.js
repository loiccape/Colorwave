import React from 'react'

export default function MenuItem({icon, title}) {
  return (
    <div className=' container w-75 d-flex align-items-center rounded-pill border my-2' style={{height:"50px"}}>
{icon}
<p className='my-auto ms-2'>{title}</p>
    </div>
  )
}
