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
//         const validation = await validatePassword(password, existingVendor.password, existingVendor.salt)

    const validation = true;
         if(validation){
                 //   return res.json(existingVendor)
                 return res.json({"message": "Login credential are not valid1"})
         }else {
            return res.json({"message": "Login credential are not valid2"})
   
         }
   }

   return res.json({"message": "Login credential are not valid3"})
   
}