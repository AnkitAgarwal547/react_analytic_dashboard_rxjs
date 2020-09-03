import { interval } from 'rxjs';
import { startWith, scan ,take} from 'rxjs/operators';


function withObservable(timer,startsWith){
  if(timer > 4000){
    const observable$ = interval(timer).pipe(take(1))
    return observable$
  }
  else{
    const observable$ = interval(timer).pipe(
      startWith(startsWith),
      scan(t=>Math.floor(Math.random() * 20000) + 100 )
  )
  return observable$
  }
 
}

 


export default withObservable