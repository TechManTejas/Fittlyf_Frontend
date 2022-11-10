import axios from "axios";

export const sendOrderPage1Data = async (data) => {
    let response;
    await axios.post("http://localhost:9000/api/send/order/1", data).then(d => {
        response = d
    }).catch(err => {
        response = err.code
    })
    return response;
}

export const sendOrderPage2Data = async (data) => {
    let response = await axios.post("http://localhost:9000/api/send/order/2", data)
    return response
}

export const sendOrderPage3Data = async (data) => {
    let response = await axios.post("http://localhost:9000/api/send/order/3", data)
    return response
}
