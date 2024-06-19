import React from 'react'
import tours from './data/data'
import Cards from './Cards'
const Tours = () => {
    
  return (
    <div>
        <h1>Trip planner</h1>
        <Cards tours={tours}></Cards>
    </div>
  )
}

export default Tours