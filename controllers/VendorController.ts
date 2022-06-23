import {Request, Response, NextFunction} from "express";
import { VendorLoginInputs } from "../dto";
import { Vendor } from "../models";
import { validatePassword } from "../utility";


export const findVendor = async(id: string | undefined, email?:string) => {

    if(email){
        return await Vendor.findOne({email:email})
    } else {
        return await Vendor.findById(id)
    }
}

export const VendorLogin = async (req: Request, res: Response, next: NextFunction) => {
   const {email,password} = <VendorLoginInputs>req.body
   
   const existingVendor = await findVendor("", email);

   if(existingVendor !== null ){

        const validation = await validatePassword(password, existingVendor.password, existingVendor.salt)
   
 
         if(validation){
                 return res.json(existingVendor)
                 
         }else {
            return res.json({"message": "Login credential are not valid"})
   
         }
   }

   return res.json({"message": "Login credential are not valid"})
   
}

export const GetVendorProfile = async (req: Request, res: Response, next: NextFunction) => {
    
}

export const UpdateVendorProfile = async (req: Request, res: Response, next: NextFunction) => {
    
}
export const UpdateVendorService = async (req: Request, res: Response, next: NextFunction) => {
    
}