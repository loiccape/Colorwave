import React from 'react'
import HeaderItem from '../../components/header_components/HeaderItem'

export default function Header({fontColor, secondaryColor}) {
  return (
    <div className={`mt-4 d-flex flex-column flex-sm-column flex-lg-row text-${fontColor}`}>
      
        <HeaderItem secondaryColor={secondaryColor} title={"New Users"} number={"150,040"} />
        <HeaderItem secondaryColor={secondaryColor} title={"New Messages"} number={"456"} />
        <HeaderItem secondaryColor={secondaryColor} title={"Sales"} number={"$45"}/>
        <HeaderItem secondaryColor={secondaryColor} title={"Conversion rate"} number={"123 324"}/>
    </div>
  )
}
