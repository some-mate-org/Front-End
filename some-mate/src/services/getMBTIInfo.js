import axios from 'axios';

export const getMBTIInfo = async (mbti, setMBTIInfo, setDesc) => {
  const URL = import.meta.env.VITE_API_URL;
  
  try {
    const response = await axios.get(`${URL}/mbti/${mbti}`);
    setMBTIInfo(response.data); // 받아온 데이터를 setMBTIInfo에 전달
    setDesc(response.data.desc.split('/'))
  } catch (e) {
    console.error('Error fetching MBTI info:', e); // 에러 처리
  }
};
