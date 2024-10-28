import { UserLogin } from "../interfaces/UserLogin";
import axios from 'axios';

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await axios.post('/login', {
      username: userInfo.username,
      password: userInfo.password
    });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error)
    throw error;
  }
}

export { login };
