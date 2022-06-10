import { timer } from "rxjs"

const observable = new timer(0 ,1000)


const subscription = observable.subscribe(
    console.log
)
