import * as S from './ResultPage.styled';
import InvitationImg from '../../assets/logo/invitationLogo.svg?react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import { getMBTIInfo } from '../../services/getMBTIInfo';
// import getMatchedUserInfo from '../../services/getMatchedUserInfo';
// import patchUserMBTI from '../../services/patchUserMBTI';
import postUserInfo from '../../services/postUserInfo';
import { useUser } from '../../Context/userContext';
import postLogin from '../../services/postLogin';

export default function ResultPage() {
  const mbti = useParams().result;
  const [mbtiInfo, setMbtiInfo] = useState({});
  const [desc, setDesc] = useState([]);
  // const [matchedUserInfo, setMatchedUserInfo] = useState(null);
  const { userData } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    getMBTIInfo(mbti, setMbtiInfo, setDesc);
    // console.log(mbtiInfo);
    console.log(userData);
  }, []);

  async function handleAcceptBtn() {
    const userId = userData['userId'];
    const userPw = userData['password'];
    console.log('userId : ', userId);
    console.log('userPw : ', userPw);

    try {
      const insertRes = await postUserInfo(userData);
      console.log('insertRes : ', insertRes);

      if (insertRes) {
        console.log('insert success');

        //여기서 로그인 처리 -> jwt 발급받게 할까? 그러고 나서 매칭으로 넘겼을 때 jwt 토큰 검증하도록
        await postLogin(userId, userPw);
        console.log(
          'result 후 토큰 확인 : ',
          localStorage.getItem('accessToken')
        );
        navigate('/matching');
      } else {
        alert('insert fail');
      }
    } catch (error) {
      console.error('Error fetching matched user info:', error);
    }
  }

  function handleReplayBtn() {
    navigate('/survey');
  }

  return (
    <S.Wrapper>
      <S.Text size={16} color="#737373">
        나의 연애 유형은
      </S.Text>
      <S.Text size={24} color="black">
        {mbtiInfo.title}
      </S.Text>
      <S.Text size={24} color="#D23E9C">
        {mbti.toUpperCase()}
      </S.Text>
      <S.ImageWrapper>
        <S.Image src={`/${mbti}.png`} />
      </S.ImageWrapper>
      <S.DescWrapper>
        {desc.map((item, index) => (
          <S.Desc key={index} size={12} color="#737373">
            {item}
          </S.Desc>
        ))}
      </S.DescWrapper>
      <S.Text size={12} color="#8BC4EF" style={{ padding: 0 }}>
        FROM. SOMEMATE
      </S.Text>
      <S.Text size={12} color="#8BC4EF" style={{ padding: 0 }}>
        초대장이 날아왔어요!
      </S.Text>
      <InvitationImg />
      <Button
        text="수락하기"
        width={314}
        theme="blue"
        onClick={handleAcceptBtn}
      />
      <Button
        text="다시하기"
        width={314}
        theme="white"
        onClick={handleReplayBtn}
      />
    </S.Wrapper>
  );
}
