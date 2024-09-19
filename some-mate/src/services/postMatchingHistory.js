import axios from 'axios';

const postMatchingHistory = async (userIdx, recommendedUserIdx) => {
  const URL = import.meta.env.VITE_API_URL;

  try {
    const response = await axios({
      method: 'post',
      url: `${URL}/matching/history/add`,
      data: {
        my_idx: userIdx,
        recommended_idx: recommendedUserIdx,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error posting matching history:', error);
    return false;
  }
};

export default postMatchingHistory;
