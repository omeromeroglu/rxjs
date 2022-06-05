import {Observable} from 'rxjs';

const observable = new Observable((subscriber)=>
{
    subscriber.next("Hello world");
    subscriber.error("Error!");
    subscriber.next("Hello world 2");

    subscriber.complete();
    subscriber.next("Hello world 3");
}
);

observable.subscribe({
    next: (value) => {
        console.log(value);
    },
    complete: () => {
        console.log("complete called");
    },
    error: (err) => {
        console.error(err);
    }

})