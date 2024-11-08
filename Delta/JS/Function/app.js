function printPoem() {
    console.log("Two roads diverged in a yellow wood,");
    console.log("And sorry I could not travel both");
    console.log("And be one traveler, long I stood");
    console.log("And looked down one as far as I could");
    console.log("To where it bent in the undergrowth;");

    console.log("");

    console.log("Then took the other, as just as fair,");
    console.log("And having perhaps the better claim,");
    console.log("Because it was grassy and wanted wear;");
    console.log("Though as for that the passing there");
    console.log("Had worn them really about the same,");

    console.log("");

    console.log("And both that morning equally lay");
    console.log("In leaves no step had trodden black.");
    console.log("Oh, I kept the first for another day!");
    console.log("Yet knowing how way leads on to way,");
    console.log("I doubted if I should ever come back.");

    console.log("");

    console.log("I shall be telling this with a sigh");
    console.log("Somewhere ages and ages hence:");
    console.log("Two roads diverged in a wood, and I—");
    console.log("I took the one less traveled by,");
    console.log("And that has made all the difference.");
}

function rollDice() {
    console.log(Math.floor(Math.random() * 5) + 1);
}

function average(n1, n2, n3){
    let avg = (n1+n2+n3)/3;
    console.log(`The average of ${n1}, ${n2}, and ${n3} is ${avg}`);
}

function table(n) {
    for(let i=1; i<=10; i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }
}

// function printTable(n) {
//     for(let i=n; i<=n*10; i+=n) {
//         console.log(i);
//     }
// }

function sum(n) {
    let s = 0;
    for(let i= 1; i<=n; i++) {
        s = s+i;
    }
    return s;
}

let str = ["hi", "hello", "bye", "!"];

function concat(str){
    let result = "";
    for(let i=0; i<str.length; i++) {
        result += str[i];
    }
    return result;
}

console.log(concat(str));

// printPoem();+
// rollDice();
//average(2, 4, 6);
//table(5);

// let n = 10;
// console.log(`The sum of numbers from 1 to ${n} is`, sum(n));