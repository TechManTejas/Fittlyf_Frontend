import axios from "axios";
import { backendbaseuri } from "../Config"
import { Refs } from "../Hooks/Refs";

export const sendOrderPage1Data = async (data) => {
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
        ShippingCountry: Refs.billingCountry.current.value,
        ShippingAddress: Refs.billingAddress.current.value,
        ShippingCity: Refs.billingCity.current.value,
        ShippingState: Refs.billingState.current.value,
        ShippingPin: Refs.billingPin.current.value,
        ShippingOtherAddress: Refs.billingOtherAddress.current.value,
    };
    const response = await axios.post(`${backendbaseuri}api/send/order/updateAddress`, data).catch(err => { return err.code; })
    return response
};