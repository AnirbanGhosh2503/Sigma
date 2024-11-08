// const arrayAverage = (arr) => {
//     let s = 0;
//     for(let i=0; i<arr.length; i++) {
//         s = s + arr[i];
//     }
//     let avg = s/arr.length;
//     console.log(`The average of the given array of numbers is ${avg}`);
// }

// arr = [2, 4, 6];
// arrayAverage(arr);


// const arrayAverage = (arr) => {
//     let total = 0;
//     for(let number of arr) {
//         total += number;
//     }
//     return total/arr.length;
// };

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arrayAverage(arr));





// const Even = (n) => {
//     if(n % 2 == 0) {
//         console.log(`${n} is even`);
//     }
// }

// Even(4);



// let num = 4;
// const isEven = (num) => num % 2 == 0;






// const object = {
//     message: 'Hello, World!',

//     logMessage() {
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage, 1000);


// let length = 4;
// function callback() {
//     console.log(this.length);
// }

// const object = {
//     length: 5,
//     method(callback) {
//         callback();
//     }
// };

// object.method(callback, 1, 2);