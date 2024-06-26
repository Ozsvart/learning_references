# setTimeout()

The global `setTimeout()` function sets a timer which executes a function or specified piece of code once the time expires.

### Syntax

`setTimeout(() => {
    console.log("Delayed for 2 seconds.")
}, 2000);`

`setTimeout(functionRef, delay)`

- `functionRef` is a function to be executed after the timer expires
- `delay` is the time in milliseconds that the timer should wait before the function is executed

### setTimeout() as an asynchronous function

`setTimeout()` is an asynchronous function, because the timer function **will not pause execution of other functions** in the functions stack.

```
setTimeout(() => {
    console.log("this is the first message");
}, 5000);
setTimeout(() => {
    console.log("this is the second message");
}, 3000);
setTimeout(() => {
    console.log("this is the third message");
}, 1000);
console.log("this is the fourth message");
```

The output will be:

// this is the fourth message  
// this is the third message  
// this is the second message  
// this is the first message

Notice that the function without setTimeout() is the first to run, then the second function **does not create a pause** for 5 seconds, **just waits** 5 seconds to execute.

### setTimeout() used inside a Promise

```
const promise = new Promise((resolve, reject) => {
if (true) {
resolve("It worked");
}
reject("Oops, there is an error");
});

const promise2 = new Promise((resolve, reject) => {
setTimeout(resolve, 100, "Hi!");
});

const promise3 = new Promise((resolve, reject) => {
setTimeout(resolve, 3000, "Pookie");
});

const promise4 = new Promise((resolve, reject) => {
setTimeout(resolve, 1000, "Is it me you are looking for?");
});

Promise.all([promise, promise2, promise3, promise4]).then((values) => {
console.log(values);
});
```

`Promise.all` takes an array of promises, and the values will be returned as an array. `Promise.all` waits for all of the promises to fulfill and then gives back the array in the order that was given in the code. The time value given in `setTimeout()` won't modify the order of the array.  
Notice that when the promise is rejected, `Promise.all.` throws an error. In this case `Promise.allSettled` can be used to return the array.
