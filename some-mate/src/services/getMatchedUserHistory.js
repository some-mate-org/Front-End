import axios from 'axios';

const getMatchedUserHistory = async (setMatchedUserHistory, accessToken) => {
  const URL = import.meta.env.VITE_API_URL;

  try {
    const response = await axios({
      method: 'get',
      url: `${URL}/matching/history`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setMatchedUserHistory(response.data);
    return true;
  } catch (error) {
    console.error('Error fetching matchingHistory info:', error);
    return false;
  }
};

export default getMatchedUserHistory;
