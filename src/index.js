import { fromEvent } from "rxjs"

const observable = new fromEvent(
    document, "click"
)


const subscription = observable.subscribe(
    console.log
)
