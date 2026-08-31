const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));

app.get("/getCookies", (req, res) => {
    res.cookie("greet", "Hello");
    res.cookie("madeIn", "India");
    res.send("Sent you some cookies");
});

app.get("/greet", (req, res) => {
    let { name = "annonymous" } = req.
        cookies;
    res.send(`Hii, ${name}`);
});

app.get("/getsignedcookies", (req, res) => {
    res.cookie("made-In", "India", { signed: true });
    res.send("Signed cookie sent");
});

app.get("/verify",(req,res)=>{
    console.log(req.signedCookies);
    res.send("signed cookie sent");
});

app.get("/", (req, res) => {
    console.dir(req.cookies);
    res.send("Hii , i am root");
});

app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, (req, res) => {
    console.log("Server is listening to port 3000");
});