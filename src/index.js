import { interval} from "rxjs"
import { take ,reduce ,scan} from "rxjs/operators"

const observable =  interval(500).pipe(
    take(5),
    scan(
        (acc,val) => acc + val,
        0
    )
)


const subscription = observable.subscribe({
  next (value) {
    console.log(value)
    }
})
