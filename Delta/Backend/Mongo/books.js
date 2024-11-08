const mongoose = require("mongoose");

main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// const bookSchema = new mongoose.Schema({
//     title: String,
//     author: String,
//     price: Number
// });

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20
    },
    author: {
        type: String,
    }, 
    price: {
        type: Number,
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    }
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title: "Mathematics XII",
//     author: "RD Sharma",
//     price: 1200
// });

let book1 = new Book({
    title: "Gone Girl",
    price: "399"
})

book1.save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });