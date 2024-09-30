import axios from 'axios';

const getDeletedUserHistory = async (recommendedIdx, accessToken) => {
  const URL = import.meta.env.VITE_API_URL;
  try {
    const response = await axios({
      method: 'delete',
      url: `${URL}/matching/history/delete`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: { recommendedIdx },
    });

    return response.status === 200;
  } catch (error) {
    console.error('Error deleting matchingHistory info:', error);
    return false;
  }
};

export default getDeletedUserHistory;

