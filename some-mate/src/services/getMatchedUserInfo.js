import axios from 'axios';

const getMatchedUserInfo = async (userIdx, setMatchedUserInfo, setDesc) => {
  const URL = import.meta.env.VITE_API_URL;

  try {
    console.log(`${URL}/user/getMatchedUserInfo/${userIdx}`);
    const response = await axios({
      method: 'get',
      url: `${URL}/user/getMatchedUserInfo/${userIdx}`,
    });
    setMatchedUserInfo(response.data);
    setDesc(response.data.desc.split('/'))
  } catch (error) {
    console.error(error);
  }
};

export default getMatchedUserInfo;
