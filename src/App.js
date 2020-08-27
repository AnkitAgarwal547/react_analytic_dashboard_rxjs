import React from 'react';
import Temprature from './components/temperature'
import AirPressure from './components/airPressure'
import Humidity from './components/humidity'
import './App.css'

function App() {
  return (
    <div data-testid="contain" className="container">
      <div className="list-type5">
        <ol>
        <li><Temprature/></li>
        <li> <AirPressure/></li>
        <li> <Humidity/></li>
        </ol>
        </div> 
    </div>
  );
}

export default App;
