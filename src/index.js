import { fromEvent , interval } from "rxjs"
import { map, concatMap,take,tap } from "rxjs/operators"
import { ajax } from "rxjs/ajax"

const button = document.querySelector("#btn")
const observable = fromEvent(button, "click").pipe(
  concatMap(() => {
    return interval(1000).pipe(
        take(5),
        tap({
            complete(){
                console.log("complete")
            }
        })
        
    )
  })
  
)

const subscription = observable.subscribe({
  next(value) {
     console.log(value)
  },
})
