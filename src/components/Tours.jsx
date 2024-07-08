import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Switch } from './data/Switch';
const Tours = ({tours,setTours,removeHandler}) => {
    const [sort,setSort]=useState("");
    function sortHandler(e){
      setSort(e.target.value);
      
    }
    useEffect(()=>{
      console.log("sort by :",sort)
      const sortedTours=[...tours]
      if(sort==="cost"){

        sortedTours.sort((a,b)=>a.cost-b.cost)
      }
      if(sort==="city"){
        sortedTours.sort((a,b)=>a.city.localeCompare(b.city))

      }

      setTours(sortedTours)
      console.log("sorted tours,",sortedTours)
    },[sort])

  return (
        <div  className='max-w-[1000px] flex items-center justify-center flex-wrap gap-5 mx-auto my-[70px] relative'>
          <div className='absolute -top-[100px] right-0 border px-2 rounded-sm'>
            <select name="sort" id="" value={sort} onChange={sortHandler }>
              {/* <option value="sort by">sort by</option> */}
              <option value="cost">cost</option>
              <option value="city">city</option>
            </select>
          </div>
          <Switch></Switch>
          {
            tours.map(tour=>{
              return(
                  <Cards key={tour.id} {...tour} removeHandler={removeHandler}></Cards>
              )
            })
          }
          
        </div>
  )
}

export default Tours