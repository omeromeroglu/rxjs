import { of } from "rxjs"

const observable = new of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

const subscription = observable.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
})
console.log("hello")
