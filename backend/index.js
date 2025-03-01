import express from "express";
import 'dotenv/config';
import dbConnect from "./src/config/dbConnect.js"

dbConnect();
const app = express();
const port = process.env.PORT || 4000

app.get('/', (req , res) => {
 
    res.send(" Sever is running!! ");
})

app.get('/login', (req, res) => {
    res.send("You are logged In ")
})

app.listen(port, () => {
    console.log(`App listening on this PORT : ${port}`);
    
})