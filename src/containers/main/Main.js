import React from 'react'
import Graph from '../../components/main_components/graph/Graph'

export default function Main( {secondaryColor}) {
  return (
    <div className='mt-3 '>
        <Graph secondaryColor={secondaryColor}/>
    </div>
  )
}
