import axios from 'axios';
const URL = import.meta.env.VITE_API_URL;

export const getQuestionList = async (setQuestionList) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${URL}/questions`,
      withCredentials: true, // 이 옵션 추가
    });
    console.log('API URL:', URL + '/questions');
    console.log('getQuestionList : ', response.data);
    setQuestionList(response.data);
  } catch (error) {
    console.error('Error fetching question list:', error);
  }
};
