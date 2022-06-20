import express from "express";
import bodyParser from "body-parser";
import {AdminRoute, VendorRoute}  from "./routes"
import mongoose from "mongoose"
import { MONGO_URI } from "./config";
import * as dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", AdminRoute)
app.use("/vendor", VendorRoute)

const mongo_uri = process.env.MONGO_URI

mongoose.connect(`${mongo_uri}`).then(result => {
 console.log("Connected to DB");
}).catch(err => console.log(err))

app.listen(5000, ()=>{

    console.log('listening on port 5000'); 
})