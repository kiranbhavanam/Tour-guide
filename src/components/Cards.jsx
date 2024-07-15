import React, { useState } from "react";
import { useTheme } from "./Theme";

const Cards = ({ image, city, cost, description ,removeHandler}) => {
    const [readmore,setReadmore]=useState(true)
    function readmoreHandler(){
        setReadmore(!readmore)
    }
    const {theme}=useTheme();
const descdata= readmore?`${description.substring(0,50)}.....`:description
  return (
    <div className={`relative ${theme === "light" ? "card-white bg-gray-100 border-gray-300" : "card-black bg-gray-800 border-gray-700"} w-[300px] border shadow-md p-4`}>
      
      <div className=" Image h-[300px]">
        <img src={image} alt="" className=" w-full h-full object-cover" />
      </div>

      <div className="Tour-infomation flex flex-col p-4">
        <div className="Tour-details">
          <h1 className="text-2xl font-semibold text-orange-600">{city}</h1>
          <h4 className="text-xl font-mono text-green-600 font-bold">${cost}</h4>
        </div>
        <div className="absolute right-4 ">
      <i class="fa-solid fa-heart"></i>
            </div>
        <div className={` Tour-info mt-2 ${readmore ? 'max-h-20' : 'max-h-full'} overflow-hidden transition-all duration-500 ease-in-out`}>
          <div className="text-sm ">{descdata}
          <span onClick={readmoreHandler} className="text-blue-500">{readmore?'readmore':'showless'}</span>
        </div>
        </div>
      </div>
      <div className="flex justify-center mt-2">

      <button className={`border px-4 py-2 border-dashed ${theme==="dark"?"border-[#EF0107] text-[#EF0107] bg-gray-200":"border-gray-200 text-gray-200 bg-[#EF0107]"} rounded-md`} onClick={()=>removeHandler(image)}>NOT INTERESTED</button>
      
      </div>
    </div>
  );
};

export default Cards;
