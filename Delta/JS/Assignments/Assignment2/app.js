// let arr = [7, 9, 0, -2];
// let n = 3;
// let ans = arr.slice(0,n);
// console.log(ans);

// let arr = [7, 9, 0, -2];
// let n = 3;
// let ans = arr.slice(arr.length-n);
// console.log(ans);

// let str = prompt("Please enter a string");
// if(str.length == 0) {
//     console.log("String is empty");
// } else {
//     console.log("String is not empty");
// }

// let str = "ApNaCoLlEgE";
// let idx = 3;
// if(str[idx] == str[idx].toLowerCase()) {
//     console.log("Character is lowercase");
// } else {
//     console.log("Character is not lowercase");
// }

// let str = prompt("Please enter a string");
// console.log(`original string = ${str}`);
// console.log(`string without spaces = ${str.trim()}`);

let arr = ["hello", 'a', 23, 64, 99, -6];
let item = 64;
if(arr.indexOf(item) !=-1) {
    console.log("Element exists in array");
} else {
    console.log("Element doesn't exist in array");
}