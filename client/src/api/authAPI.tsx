import { UserLogin } from "../interfaces/UserLogin";
import axios from 'axios';

const API_URL = 'http://localhost:3000/auth'

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username: userInfo.username,
      password: userInfo.password
    });
    console.log(JSON.stringify(response))
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error)
    throw error;
  }
}

export { login };
