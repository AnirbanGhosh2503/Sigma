// let n = 10;

// if(n % 10 == 0) {
//     console.log("Good!");
// } else {
//     console.log("Bad!");
// }

// let name = prompt("Please enter your name");
// let age = prompt("Please enter your age");
// alert(`${name} is ${age} years old`);

// let quarter = 1;

// switch (quarter){
// case 1:
//     console.log("January, February, March");
//     break;
// case 2:
//     console.log("April, May, June");
//     break;
// case 3:
//     console.log("July, August, September");
//     break;
// case 4:
//     console.log("October, November, December");
//     break;
// default:
//     console.log("Invalid Quarter!");
// }

// let str = "Arunima";

// if((str[0]==='a' || str[0]==='A') && str.length > 5) {
//     console.log("It is a golden string!");
// } else {
//     console.log("It is not a golden string!");
// }

// let a = 1;
// let b = 2;
// let c = 3;

// if(a>b && a>c){
//     console.log(`${a} is the largest number`);
// } else if(b>c && b>a){
//     console.log(`${b} is the largest numebr`);
// } else{
//     console.log(`${c} is the largest number`);
// }

let n1 = 32;
let n2 = 47852;

if(n1 % 10 == n2 % 10){
    console.log(`${n1} and ${n2} have the same last digit ${n1%10}`);
} else {
    console.log(`${n1} and ${n2} do not have the same last digits!`);
}
