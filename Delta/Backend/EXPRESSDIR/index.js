const express = require("express");
const app = express();

console.dir(app);

let port = 3000; //8080

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//     //console.log(req);
//     console.log("request received");
//     let code = "<h1>Fruits<h1/> <ul><li>apple</li><li>orange<li/></ul>";
//     res.send(code);
// });

app.get("/", (req, res) => {
    res.send("hello I am root");
 });

// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// });

// app.get("*", (req, res) => {
//     res.send("this path does not exist");
// });

// app.post("/", (req, res) => {
//     res.send("you sent a post request to root");
// });

// app.get("/:username", (req, res) => {
//     // console.log(req.params);
//     // res.send("hello, I am root");
//     let { username, id } = req.params;
//     let htmlStr = `<h1>welcome to the page of @${username}!</h1>`
//     res.send(htmlStr);
// });

app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q) {
        res.send("<h1>nothing searched</h1>");
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
})