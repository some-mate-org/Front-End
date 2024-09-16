import * as S from './ResultPage.styled';
import InvitationImg from '../../assets/logo/invitationLogo.svg?react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import { getMBTIInfo } from '../../services/getMBTIInfo';
import getMatchedUserInfo from '../../services/getMatchedUserInfo';

export default function ResultPage() {
  const mbti = useParams().result;
  const [mbtiInfo, setMbtiInfo] = useState({});
  const [desc, setDesc] = useState([]);
  const [matchedUserInfo, setMatchedUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getMBTIInfo(mbti, setMbtiInfo, setDesc);
    console.log(mbtiInfo);
  }, []);

  async function handleAcceptBtn() {
    const userIdx = 8;
    console.log('clicked!');

    try {
      await getMatchedUserInfo(userIdx, setMatchedUserInfo, setDesc);
    } catch (error) {
      console.error('Error fetching matched user info:', error);
    }
  }

  // matchedUserInfo가 유효한 값일 때만 navigate 동작
  useEffect(() => {
    if (matchedUserInfo !== null) {
      navigate('/matching', {
        state: {
          matchedUserInfo: matchedUserInfo,
          matchedUserDesc : desc
        },
      });
    }
  }, [matchedUserInfo, navigate]); // matchedUserInfo 변경될 때만 동작

  function handleReplayBtn() {
    // navigate('/설문조사URL');
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
        onClickFunc={handleAcceptBtn}
      />
      <Button
        text="다시하기"
        width={314}
        theme="white"
        onClickFunc={handleReplayBtn}
      />
    </S.Wrapper>
  );
}
