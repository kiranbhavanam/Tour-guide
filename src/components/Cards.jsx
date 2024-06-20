import React, { useState } from "react";

const Cards = ({ image, city, cost, description ,removeHandler}) => {
    const [readmore,setReadmore]=useState(true)
    function readmoreHandler(){
        setReadmore(!readmore)
    }
const descdata= readmore?`${description.substring(0,50)}.....`:description
  return (
    <div>
      <div className=" Image w-[250px] h-[250px] border-red-600 overflow-hidde">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="Tour-infomation">
        <div className="Tour-details">
          <h1>{city}</h1>
          <h4>{cost}</h4>
        </div>
        <div className="Tour-info">
          <div className="w-[250px]">{descdata}</div>
          <span onClick={readmoreHandler}>{readmore?'readmore':'showless'}</span>
        </div>
      </div>
      <button onClick={()=>removeHandler(image)}>NOT INTERESTED</button>
    </div>
  );
};

export default Cards;
