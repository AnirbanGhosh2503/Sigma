// const square = n => n*n;
// console.log(square(4));

// let id = setInterval(() => {
//     console.log("Hello World");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("Interval cleared");
// }, 10000);



// let nums = [10, 20, 30, 40];

// let ans  = nums.every((el) => el % 10 == 0);

// console.log(ans);




function getMin(nums) {
    let min = nums.reduce((min, el) => {
        if(min < el) {
            return min;
        } else {
            return el;
        }
    });

    return min;
}
let nums = [10, 20, 30, 40, 5];
console.log(min);