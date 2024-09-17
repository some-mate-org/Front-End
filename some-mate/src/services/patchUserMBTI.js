import axios from 'axios';

const patchUserMBTI = async (userIdx, mbti) => {
  const URL = import.meta.env.VITE_API_URL;
  console.log(`${URL}/user/updateUserMbti`);
  try {
    const response = await axios({
      method: 'patch',
      url: `${URL}/user/updateUserMbti`,
      data: {
        idx: userIdx,
        mbti: mbti,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default patchUserMBTI;
