import { interval } from 'rxjs';
import { startWith, scan } from 'rxjs/operators';


function withObservable(timer,startsWith){
  const observable$ = interval(timer).pipe(
    startWith(startsWith),
    scan(t=>Math.random())
)
return observable$
}

 


export default withObservable