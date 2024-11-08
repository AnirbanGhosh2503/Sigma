// let n = 5;

// for (let i = 0; i < n; i++) {
//     console.log("hello ", i);
// }

// console.log("bye!");

// console.log(process.argv);

// let args = process.argv;

// for (let i = 2; i < args.length; i++) {
//     console.log("Hello to ", args[i]);
// }



// const math = require("./math");

// console.log(math.sum(2,2));
// console.log(math.PI);


// const info = require("./Fruits");

// console.log(info);

//console.log(info[0].name);


import {sum, PI} from "./math.js";
import { generate } from "random-words";

//console.log(sum(1,2));
console.log(generate());