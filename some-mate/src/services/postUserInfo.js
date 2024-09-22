import axios from 'axios';

const postUserInfo = async (userData) => {
  const URL = import.meta.env.VITE_API_URL;

  try {
    const response = await axios.post(`${URL}/user/register`, userData, {
      headers: {
        'Content-Type': 'application/json',
    },
    });
    return response.data;
  } catch (error) {
    console.error('Error posting user data:', error);
    return false;
  }
};

export default postUserInfo;