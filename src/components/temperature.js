import React from "react";
import withObserve from "../Observable/index";

import EventEmitter from "../Observable/emitter";

function Temperature() {
  const [state, setState] = React.useState();
  const temperature = new EventEmitter();

  const [seconds, setSeconds] = React.useState();

  temperature.on("temp_data", () => {
    withObserve(Math.floor(Math.random() * 5000) + 2000, 51234).subscribe(setState);
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      temperature.trigger("temp_data");
    }, Math.floor(Math.random() * 5000) + 2000);
    return () => clearInterval(interval);
  }, []);
  
  return <div>The Temprature is {state ===undefined ? "1" : state === 0 ? "N/A"  : state}.</div>;
}

export default Temperature;
