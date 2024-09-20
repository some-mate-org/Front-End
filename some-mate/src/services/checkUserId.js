import axios from 'axios';

const URL = import.meta.env.VITE_API_URL;

export const checkUserId = async (user_id) => {
  try {
    const response = await axios.get(`${URL}/user/checkUserId`, {
      params: { userId: user_id },
    });
    return response.data;
  } catch (error) {
    console.error('Error checking user ID:', error);
    return false;
  }
};
