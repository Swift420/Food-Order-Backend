import express, {Request, Response, NextFunction } from "express";
import { CreateVendor, GetVendorByID, GetVendors } from "../controllers";


const router = express.Router();

//route name - controller
// /vendor  - CreateVendor

router.post("/vendor",CreateVendor);
router.get("/vendors",GetVendors);
router.get("/vendor/:id",GetVendorByID);


router.get("/", (req:Request, res:Response, next:NextFunction) =>{

    res.json({message: "Hello from admin!"});

});

export {router as AdminRoute}