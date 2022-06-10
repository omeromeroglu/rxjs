import { fromEvent , interval } from "rxjs"
import { map, mergeMap,take } from "rxjs/operators"
import { ajax } from "rxjs/ajax"

const button = document.querySelector("#btn")
const observable = fromEvent(button, "click").pipe(
  mergeMap(() => {
    return interval(1000).pipe(
        take(5)
    )
  })
  
)

const subscription = observable.subscribe({
  next(value) {
     console.log(value)
  },
})
