import axios from "axios";
import config from "../config";
import mapUserResponseToStateObject from "./mappers/mapUserResponseToObject";
const signUpRequest =  async (signUpFormData) => {
    if(!signUpFormData) return null;
    const signUpResponse = await axios.post(`${config.apiUrl}/auth/sign_up`, signUpFormData);
    return await signUpResponse.data.user;
}

const getUserRequest = async (userId, token) => {
    if(!userId && !token) return null;
    const userResponse = await axios.get(`${config.apiUrl}/users/${userId}`,{
        headers:{"Authorization": token }
    });
    return mapUserResponseToStateObject(userResponse);
}
export {
    signUpRequest,
    getUserRequest
}