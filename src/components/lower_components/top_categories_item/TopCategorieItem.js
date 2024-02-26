import React from 'react'

export default function TopCategorieItem({title,progressPercent,secondaryColor}) {
  return (
    <div>
        <p>{title}</p>
        <div className="progress  my-2">
        <div className={`progress-bar bg-${secondaryColor}`} style={{ width: `${progressPercent}` }}></div>

        </div>
    </div>
  )
}
