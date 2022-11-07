// import validator from "validator";

export const ValidateAll = (email, zip) => {
    if(!validator.isEmail(email)) return "email"
    if(!validator.isNumeric(zip)) return "zip"
    return "none"
}