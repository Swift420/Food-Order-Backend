import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const GenerateSalt = async () => {
    return await bcrypt.genSalt(10);
}

export const GeneratePassword = async (password:string , salt:string) => {

        return await bcrypt.hash(password,salt)
}

export const validatePassword = async (enteredpassword:string, savedPassword:string, salt:string) => {

    return await GeneratePassword(enteredpassword,salt) == savedPassword;

}

export const GenerateSignature =  (payload: any) => {
    
}