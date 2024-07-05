import logo from './logo.svg';
import './App.css';
import Tours from './components/Tours';
import data from './components/data/data'
import { useState } from 'react';
function App() {
  const [tours,setTours]=useState(data)
function removeHandler(id){
  console.log("remove button clicked,",id)
    const newTours=tours.filter(tour=>tour.image!==id)
    setTours(newTours)
  }
  return (
    <div className="App flex flex-col justify-center items-center">
      <h3 className='text-2xl text-violet-700 px-8 py-2  mt-[50px] border-dashed border-4 border-violet-800 rounded-md'>Trip Planner</h3>
      <Tours tours={tours} setTours={setTours} removeHandler={removeHandler}></Tours>
    </div>
  );
}

export default App;
