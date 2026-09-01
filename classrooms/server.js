const express = require("express");
const app = express();
// const users = require("./routes/user.js");
// const posts = require("./routes/post.js");
const session = require("express-session");

const sessionOption = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true
};

app.use(session(sessionOption));

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    // console.log(req.session);
    req.session.name = name;
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    res.send(`Hello , ${req.session.name}`);
});

// app.get("/reqcount", (req, res) => {
//     if (req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1;
//     }
//     res.send(`You sent a request ${req.session.count} times`);
// });

// app.get("/test", (req, res) => {
//     res.send("Test successful");
// });

app.listen(3000, (req, res) => {
    console.log("Server is listening to port 3000");
});