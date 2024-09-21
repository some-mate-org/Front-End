import axios from 'axios';

const getMatchedUserInfo = async (userId, setMatchedUserInfo, setDesc) => {
  const URL = import.meta.env.VITE_API_URL;

  try {
    console.log(`${URL}/user/getMatchedUserInfo/${userId}`);
    const response = await axios({
      method: 'get',
      url: `${URL}/user/getMatchedUserInfo/${userId}`,
    });
    
    setMatchedUserInfo(response.data);
    setDesc(response.data.desc.split('/'));
  } catch (error) {
    console.error(error);
  }
};

export default getMatchedUserInfo;
