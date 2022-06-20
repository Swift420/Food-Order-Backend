import { Request, Response,NextFunction} from "express"
import { CreateVendorInput } from "../dto";
import { Vendor } from "../models";

export const CreateVendor = async (req: Request, res: Response, next: NextFunction) => {

    const { name, address,pincode,foodType,email,password,ownerName,phone} = <CreateVendorInput>req.body;

    const createdVendor = await Vendor.create({
        name: name,
        address: address,
        pincode: pincode,
        foodType: foodType,
        email: email,
        password: password,
        salt: '',
        ownerName: ownerName,
        phone: phone,
        rating: 0,
        serviceAvailable: false,
        coverImages: [],
    })

    return res.json({name, address,pincode,email,password,ownerName,phone, foodType})

}

export const GetVendors = async (req: Request, res: Response, next: NextFunction) => {

    
}

export const GetVendorByID = async (req: Request, res: Response, next: NextFunction) => {

    
}