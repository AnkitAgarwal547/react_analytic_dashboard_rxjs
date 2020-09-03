import React from 'react'
import withObserve from '../Observable/index'
import EventEmitter from '../Observable/emitter'


 function AirPressure(props) {
    const [state, setState] = React.useState();
    const [seconds, setSeconds] = React.useState(0);

    const pressure = new EventEmitter();

    pressure.on('pressure_data',()=>{
        withObserve(Math.floor(Math.random() * 5000) + 2000, 4533).subscribe(setState);
        })

    React.useEffect(() => {
        const interval = setInterval(() => {
            pressure.trigger('pressure_data');
          }, Math.floor(Math.random() * 5000) + 2000);
          
          return () => clearInterval(interval);
    }, []);

    return (
        <div>
            The Air Pressure is  {state ===undefined ? "1" : state === 0 ? "N/A"  : state}.
        </div>
    )
}

export default AirPressure;

 