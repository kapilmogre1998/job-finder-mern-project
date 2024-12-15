import { API_BASE_URL } from "../../constant"


export const registerAPI = async (payload) => {
    const API_URL = `${API_BASE_URL}/register`;

    try {
        return await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
    } catch (error) {
        console.log(error)
    }
}