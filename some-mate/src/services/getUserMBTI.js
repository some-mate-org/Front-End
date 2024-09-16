import axios from 'axios';

export const updateUserMBTI = async (userIdx) => {
  const URL = import.meta.env.VITE_API_URL;

  try {
    await axios({
      method: 'get',
      url: `${URL}/user/mbti?userIdx=${userIdx}`,
    });
  } catch (e) {
    console.log(e);
  }
};
