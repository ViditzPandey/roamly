const express=require("express")
const router=express.Router();

// Index -posts
router.get("/",(req,res)=>{
    res.send("GET Post");
});

// Show -posts
router.get("/:id",(req,res)=>{
    res.send("GET for user id");
});

// POST - users
router.post("/:id",(req,res)=>{
    res.send("POST for users");
});

// Delete - posts
router.delete("/:id",(req,res)=>{
    res.send("DELETE for user id");
});

module.exports=router;