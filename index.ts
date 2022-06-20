import express from "express";


const app = express();

app.use("/", (req, res)=> {
    return res.json("Hello from backend")
})


app.listen(5000, ()=>{
    console.log('listening on port 5000'); 
})