import axios from 'axios';

const postMatchingHistory = async (userId, recommendedUserIdx) => {
  const URL = import.meta.env.VITE_API_URL;

  try {
    const response = await axios({
      method: 'post',
      url: `${URL}/matching/history/add`,
      data: {
        userId: userId,
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
