import axios from "axios"
import { backendbaseuri } from "../Config";

export const sendWebinarData = async (data) => {
    const response = await axios.post(`${backendbaseuri}webinar/post`, data).catch(err => { return err.code; })
    return response
}