import axios from 'axios';

// 서버에 로그인 요청을 보내는 함수
const handleLogin = async (userId, password) => {
  try {
    const URL = import.meta.env.VITE_API_URL;
    const response = await axios.post(`${URL}/user/login`, {
      userId,
      password,
    });

    const { accessToken, refreshToken } = response.data;
    console.log(response.data);

    console.log('accessToken:', accessToken);
    console.log('refreshToken:', refreshToken);

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

} catch (error) {
    console.error('로그인 실패:', error);
    alert('아이디 또는 비밀번호가 맞지 않습니다. 다시 확인해주세요.');
  }
};

export default handleLogin;
