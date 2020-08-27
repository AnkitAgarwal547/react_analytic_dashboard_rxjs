import React from 'react'
import withObserve from '../Observable/index'
import EventEmitter from '../Observable/emitter'

function Humidity() {
    const [state, setState] = React.useState();
    const humidity = new EventEmitter();

    humidity.on('humidity_data',()=>{
        withObserve(1000,5).subscribe(setState)
        })

    React.useEffect(() => {
       humidity.trigger('humidity_data');
    }, []);

    return (
        <div>
            The Humidity is {state}.
        </div>
    )
}

export default Humidity;
 
