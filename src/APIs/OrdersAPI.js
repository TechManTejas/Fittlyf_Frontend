import axios from "axios";
import { backendbaseuri } from "../Config"

export const sendOrderPage1Data = async (data) => {
    const response = await axios.post(`${backendbaseuri}api/send/order/1`, data).catch(err => { return err })
    return response.data
}

export const sendOrderPage2Data = async (data) => {
    let response = await axios.post(`${backendbaseuri}api/send/order/2`, data)
    return response
}

export const sendOrderPage3Data = async (data) => {
    let response = await axios.post(`${backendbaseuri}api/send/order/3`, data)
    return response
}
