import axios from "axios";
import { backendbaseuri } from "../Config"
import { Refs } from "../Hooks/Refs";

export const sendOrderPage1Data = async (data) => {
    console.log(data)
    const response = await axios.post(`${backendbaseuri}api/send/order/1`, data).catch(err => { return err.code; })
    return response
}

export const sendOrderPage2Data = async (data) => {
    const response = await axios.post(`${backendbaseuri}api/send/order/2`, data).catch(err => { return err.code; })
    return response
}

export const sendOrderPage3Data = async (data) => {
    const response = await axios.post(`${backendbaseuri}api/send/order/3`, data).catch(err => { return err.code; })
    return response
}

export const UpdateBillingAddress = async (id) => {
    const data = {
        id: id,
        billingCountry: Refs.billingCountry.current.value,
        billingAddress: Refs.billingAddress.current.value,
        billingCity: Refs.billingCity.current.value,
        billingState: Refs.billingState.current.value,
        billingPin: Refs.billingPin.current.value,
        billingOtherAddress: Refs.billingOtherAddress.current.value,
    };
    const response = await axios.post(`${backendbaseuri}api/send/order/updateAddress`, data).catch(err => { return err.code; })
    return response
};