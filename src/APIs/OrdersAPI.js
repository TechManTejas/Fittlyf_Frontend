import axios from "axios";

export const sendOrderPage1Data = async (data) => {
    return await axios.post("http://localhost:9000/api/send/order/1", data)
}