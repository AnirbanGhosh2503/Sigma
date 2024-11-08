// let msg="help!";
// console.log(msg.trim().toUpperCase());

// let name="ApnaCollege";
// console.log(name.slice(4,9));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna","Our"));
// console.log(name.replace("Apna","").replace('l','t').replace('l','t'));


// let months = ['january', 'july', 'march', 'august'];
// months.shift();
// months.shift();
// months.unshift('june');
// months.unshift('july');
// console.log(`${months}`);
// months.splice(0,2,"july","june");
// console.log(`${months}`);

// let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
// console.log(lang.reverse().indexOf("javascript"));

let game = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
console.log(game);
game[0][1] = 'O';
console.log(game);