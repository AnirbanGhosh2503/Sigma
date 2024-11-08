// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log("data1 = ",data.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log("data2 = ", data2.fact);
//     })
//     .catch((err) => {
//         console.log("Error - ",err);
//     });

//     console.log("I am happy");




// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res.json();
//         console.log(data2.fact);
//     } catch(e) {
//         console.log("error - ", e);
//     }
//     console.log("bye!");
// }



// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
//     let link = await getImage();
//     console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src" ,link);
//     console.log(link);
// });


// async function getImage() {
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//     } catch(e) {
//         console.log("error - ", e);
//         return "No Image found";
//     }
// }



// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     //console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });


// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch(e) {
//         console.log("error - ", e);
//         return "No fact found";
//     }
// }




// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try{
//         const config = {headers: {Accept: "application/json"}};
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     } catch(err) {
//         console.log(err);
//     }
// }




let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    let colArr = await getColleges(country);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr) {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}


async function getColleges(country) {
    try{
        let res = await axios.get(url + country);
        return res.data;
    } catch(e) {
        console.log("error: ", e);
        return [];
    }
}