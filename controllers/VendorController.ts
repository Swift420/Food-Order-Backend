import {Request, Response, NextFunction} from "express";
import { EditVendorInputs, VendorLoginInputs } from "../dto";
import { Vendor } from "../models";
import { GenerateSignature, validatePassword } from "../utility";


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

                const signature = GenerateSignature({
                    _id: existingVendor.id,
                    email: existingVendor.email,
                    foodTypes: existingVendor.foodType,
                    name: existingVendor.name

                })

                 return res.json(signature)
                 
         }else {
            return res.json({"message": "Login credential are not valid"})
   
         }
   }

   return res.json({"message": "Login credential are not valid"})
   
}

export const GetVendorProfile = async (req: Request, res: Response, next: NextFunction) => {
    
    const user = req.user;

    if(user) {
        const existingVendor = await findVendor(user._id);

        return res.json(existingVendor)
    }
    
    return res.json({"message": "Login credential are not valid"})
   
}

export const UpdateVendorProfile = async (req: Request, res: Response, next: NextFunction) => {

       const {foodTypes, name,address,phone} = <EditVendorInputs> req.body 

    const user = req.user;

    if(user) {
        const existingVendor = await findVendor(user._id);

        if(existingVendor != null) {
            existingVendor.name = name;
            existingVendor.address = address;
            existingVendor.phone = phone;
            existingVendor.foodType = foodTypes;

            const savedResult = await existingVendor.save();

            return res.json(savedResult)
        }

        return res.json(existingVendor)
    }
    
    return res.json({"message": "Login credential are not valid"})
   
}
export const UpdateVendorService = async (req: Request, res: Response, next: NextFunction) => {
    
}