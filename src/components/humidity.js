import React from 'react'
import withObserve from '../Observable/index'
import EventEmitter from '../Observable/emitter'

function Humidity() {
    const [state, setState] = React.useState();
    const [seconds, setSeconds] = React.useState(0);

    const humidity = new EventEmitter();

    humidity.on('humidity_data',()=>{
        withObserve(Math.floor(Math.random() * 5000) + 2000, 7765).subscribe(setState);
    })

    React.useEffect(() => {
        const interval = setInterval(() => {
            humidity.trigger('humidity_data');
          }, Math.floor(Math.random() * 5000) + 2000);

          return () => clearInterval(interval);
    }, []);

    return (
        <div>
            The Humidity is {state ===undefined ? "1" : state === 0 ? "N/A"  : state}.
        </div>
    )
}

export default Humidity;
 
