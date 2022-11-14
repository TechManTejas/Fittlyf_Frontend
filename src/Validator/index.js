// import validator from "validator";
const validator = require('validator');

export const ValidateAll = (email, zip, country, firstName, lastName, address, city, state) => {
    if(!validator.isEmail(email)) return "email"
    if(!validator.isNumeric(zip)) return "zip"
    if(country === '-') return "country"
    if(firstName === '') return "firstName"
    if(lastName === '') return "lastName"
    if(address === '') return "address"
    if(city === '') return "city"
    if(state === '-') return "state"
    return "none"
}