// checkUserId.js
import axios from 'axios';

export const checkUserIdAvailability = async (user_id) => {
  const URL = import.meta.env.VITE_API_URL; // Ensure this is correctly set
  try {
    const encodedUserId = encodeURIComponent(user_id);
    const response = await axios.get(
      `${URL}/user/check-username/${encodedUserId}`
    );

    return response.data.available; // 서버에서 'available' 필드 반환
  } catch (error) {
    console.error('아이디 중복 검사 중 오류 발생:', error);
    return false;
  }
};
    