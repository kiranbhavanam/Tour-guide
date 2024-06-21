import React from 'react'
import Cards from './Cards'
const Tours = ({tours,removeHandler}) => {
    
  return (
        <div  className='max-w-[1000px] flex items-center justify-center flex-wrap gap-5 mx-auto my-[70px]'>
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