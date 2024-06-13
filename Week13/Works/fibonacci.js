// function fibonacci(n){
//     if(n<=1){
//         return n
//     }else{
//         return fibonacci(n-1)+fibonacci(n-2)
//     }
// }

// function fibonacci(n){
//     const fib = [0,1];
//     for(let i=2; i<n; i++){
//         fib[i] = fib[i-1]+fib[i-2];
//     }
//     return fib;
// }

// console.log(fibonacci(7));


// function fibonacciSeries(n) {
//     let fibSeries = [];

//     for (let i = 0; i < n; i++) {
//         if (i <= 1) {
//             fibSeries.push(i);
//         } else {
//             fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
//         }
//     }

//     return fibSeries;
// }

// console.log(fibonacciSeries(7));


// function fibonacciSeries(n, a = 0, b = 1) {
//     if (n > 0) {
//         console.log(a);
//         fibonacciSeries(n - 1, b, a + b);
//     }
// }

// fibonacciSeries(7);

