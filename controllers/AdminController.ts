import { Request, Response,NextFunction} from "express"
import { CreateVendorInput } from "../dto";
import bcrypt from "bcrypt";
import { Vendor } from "../models";
import { GeneratePassword, GenerateSalt } from "../utility";

export const CreateVendor = async (req: Request, res: Response, next: NextFunction) => {

    const { name, address,pincode,foodType,email,password,ownerName,phone} = <CreateVendorInput>req.body;

    const exisitingVendor =  await Vendor.findOne({email: email})

    
    if(exisitingVendor != null){
        return res.json({"message": "Vendor already exists"})
    }
    //generate a salt 

        const salt = await bcrypt.genSalt(10);
        
        const userPassword =  await bcrypt.hash(password, salt);
        
    //encrypt the password



    const createdVendor = await Vendor.create({
        name: name,
        address: address,
        pincode: pincode,
        foodType: foodType,
        email: email,
        password: userPassword,
        salt: salt,
        ownerName: ownerName,
        phone: phone,
        rating: 0,
        serviceAvailable: false,
        coverImages: [],
    })

    return res.json(createdVendor)

}

export const GetVendors = async (req: Request, res: Response, next: NextFunction) => {

    
}

export const GetVendorByID = async (req: Request, res: Response, next: NextFunction) => {

    
}