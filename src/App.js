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
    <div className="App">
      <h3 className='text-2xl text-violet-700'>Hey its kiran</h3>
      <Tours tours={tours} removeHandler={removeHandler}></Tours>
    </div>
  );
}

export default App;
