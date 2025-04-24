const express = require("express")

const port = 3005;

const app = express();

app.use("/test",function(req,res){
    console.log("we are here /test")
    res.send("hello from test ")
}) // function is request handler 

// here it can match the /user , /user/123 , /user/1 but not /user123 and Order matter in Routing
app.get("/user",(req,res)=> {
    res.send({"Fname":"Prathamesh","Lname":"Mane"})
})

app.post("/user",(req,res)=> {
    res.send("Data is saved in Database")
})

app.put("/user",(req,res)=> {
    res.send("A Resource is updated totally")
})

app.patch("/user",(req,res)=> {
    res.send("A Resource is updated Partially")
})

app.delete("/user",(req,res)=> {
    res.send("A Resource is Deleted Completely")
})

app.listen(port,(req,res)=>{
    console.log("Server is started")
})