// import validator from "validator";
const validator = require('validator');
import { Refs } from '../Hooks/Refs';


export const ValidateAll = () => {

    const email = Refs.emailPhoneNumber.current.value
    const zip = Refs.zip.current.value
    const firstName = Refs.firstName.current.value
    const lastName = Refs.lastName.current.value
    const address = Refs.address.current.value
    const city = Refs.city.current.value
    const state = Refs.state.current.value
    const phone = Refs.PhoneNumber.current.value

    if (email === '') return "Email cannot be empty"
    if (!validator.isEmail(email)) return "Invalid Email ID"

    if (phone === '') return "Phone Number cannot be empty"
    if (!phone.match(/^\d{10}$/)) return "Invalid Phone Number"

    if (zip === '') return "Zip cannot be empty"
    if (!zip.match(/^\d{6}$/)) return "Invalid Zip"

    // if (country === '-') return "country"

    if (firstName === '') return "First Name cannot be Empty"
    if (lastName === '') return "Last Name cannot be Empty"
    if (address === '') return "Address cannot be Empty"
    if (city === '') return "City cannot be Empty"
    if (state === '-') return "Please select the state"

    return "none"
}