import axios from 'axios';
const URL = import.meta.env.VITE_API_URL;

export const fetchQuestion = async (questionId) => {
  try {
    const response = await axios.get(`${URL}/questions/${questionId}`);
    const questionData = response.data;
    const [questionText, emoji] = questionData.question2_title.split('/');
    return {
      ...questionData,
      question2_title: { questionText, emoji }
    };
  } catch (error) {
    console.error('Error fetching question:', error)
  }
};

export const submitAnswers = async (answerList) => {
  try {
    await axios.post(`${URL}/questions/answers`, answerList);
  } catch (error) {
    console.error('Error submitting answers:', error);
  }
};
