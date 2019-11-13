import axios from "axios";
import config from "../config";

const signUpRequest =  async (signUpFormData) => {
    if(!signUpFormData) return null;
    const signUpResponse = await axios.post(`${config.apiUrl}/auth/sign_up`, signUpFormData);
    return await signUpResponse.data.user;
}
const getUserRequest = async (userId, token) => {
    if(!userId) return null;
    const userResponse = await axios.get(`${config.apiUrl}/users/${userId}`,{
        headers:{"Authorization": `Bearer ${token}` }
    });
    console.log("UserResponse: ", userResponse);
    return userResponse;
}

export {
    signUpRequest,
    getUserRequest
}