import axios from 'axios';

const postMatchingHistory = async (recommendedUserIdx, accessToken) => {
  const URL = import.meta.env.VITE_API_URL;

  console.log('recommendedUserIdx:', recommendedUserIdx);

  try {
    const response = await axios({
      method: 'post',
      url: `${URL}/matching/history/add`,
      data: {
        recommended_idx: recommendedUserIdx,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error posting matching history:', error);
    return false;
  }
};

export default postMatchingHistory;
