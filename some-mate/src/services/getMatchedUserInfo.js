import axios from 'axios';

const getMatchedUserInfo = async (setMatchedUserInfo, setDesc, accessToken) => {
  const URL = import.meta.env.VITE_API_URL;

  try {
    console.log(`${URL}/user/getMatchedUserInfo`);
    const response = await axios({
      method: 'get',
      url: `${URL}/user/getMatchedUserInfo`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    setMatchedUserInfo(response.data);
    setDesc(response.data.desc.split('/'));
  } catch (error) {
    console.error(error);
  }
};

export default getMatchedUserInfo;
