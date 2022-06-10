import { interval } from "rxjs"

const observable = new interval(1000)


const subscription = observable.subscribe(
    console.log
)
