import React from 'react'
import withObserve from '../Observable/index'

 import EventEmitter from '../Observable/emitter'
   
 function Temperature() {
    const [state, setState] = React.useState();

    const temperature = new EventEmitter();

    temperature.on('temp_data',()=>{
        withObserve(1000,5).subscribe(setState)
        })

    React.useEffect(() => {
        temperature.trigger('temp_data');
    }, []);

        return (
        <div>
            The Temprature is {state}.
        </div>
    )
}


export default Temperature;
