import React from 'react'
import withObserve from '../Observable/index'
import EventEmitter from '../Observable/emitter'


 function AirPressure(props) {
    const [state, setState] = React.useState();
    const pressure = new EventEmitter();

    pressure.on('pressure_data',()=>{
        withObserve(1000,5).subscribe(setState)
        })

    React.useEffect(() => {
        pressure.trigger('pressure_data');
    }, []);

    return (
        <div>
            The Air Pressure is {state}.
        </div>
    )
}

export default AirPressure;

 