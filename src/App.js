import './App.css';
import Tours from './components/Tours';
import data from './components/data/data'
import { useState } from 'react';
import { useTheme } from './components/Theme';
function App() {
  const [tours,setTours]=useState(data)
function removeHandler(id){
  console.log("remove button clicked,",id)
    const newTours=tours.filter(tour=>tour.image!==id)
    setTours(newTours)
  }
  function favouriteHandler(id){
    //i need to find the tour with the given id ,and change the 
    const newTours= tours.map((tour)=>{
        if(tour.image===id)
          tour.fav=!tour.fav
        return tour
    })

    console.log(newTours);
    setTours(newTours);
    
  }
  const {theme}=useTheme();

  return (

    <div className={`App flex flex-col justify-center items-center ${theme === "light" ? "bg-white text-black" : "bg-zinc-600 text-white"}`}>
      <h3 className='text-2xl text-violet-700 px-8 py-2  mt-[50px] border-dashed border-4 border-violet-800 rounded-md'>Trip Planner</h3>
      <Tours tours={tours} setTours={setTours} removeHandler={removeHandler} favouriteHandler={favouriteHandler}></Tours>
    </div>
  );
}

export default App;
