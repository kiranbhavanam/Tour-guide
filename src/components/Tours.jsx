import React from 'react'
import Cards from './Cards'
const Tours = ({tours,removeHandler}) => {
    
  return (
        <div  className='border-4 w-full h-full'>
          {
            tours.map(tour=>{
              return(
                  <Cards  {...tour} removeHandler={removeHandler}></Cards>
              )
            })
          }
        </div>
  )
}

export default Tours