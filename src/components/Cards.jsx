import React from 'react'

const Cards = ({tours}) => {
  return (
    <div>
        {
            tours.map(tour=>{
                return(
                <div>
                    <div>
                        <h1>{tour.city}</h1>
                        <img src={tour.image} alt="" />
                    </div>
                    <div>
                        <h4>{tour.cost}</h4>
                        <div>{tour.description}/</div>
                    </div>
                </div>)
            })
        }
    </div>
  )
}

export default Cards