import { useEffect } from 'react';
import axios from 'axios';
import * as S from './MainuserPage.styled';
import Button from '../../components/Button';
import Info from '../../components/Info';
import MainLogo from '../../assets/logo/MainLogo.svg';
import { useUser } from '../../Context/userContext.jsx';

export default function MainuserPage() {
    const { userData, updateUser } = useUser();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`/user/${userData.user_id}`);
                if (response.data) {
                    const { name, age, mbti, profile } = response.data; // 가져온 데이터에서 필요한 값 추출
                    updateUser({
                        name,
                        age,
                        mbti,
                        profile, 
                    });
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        // user_id가 있을 때만 데이터 가져오기
        if (userData.user_id) {
            fetchUserData();
        }
    }, [userData.user_id, updateUser]);

    return (
        <S.Container>
            <img src={MainLogo} alt="Main Logo" />
            <S.ProfileImageContainer>
                <img src={userData.profile}  />
            </S.ProfileImageContainer>
            <Info text={userData.name} />  
            <Info text={userData.age} />
            <Info text={userData.mbti} />
            <Button
                width={270}
                theme="gray"
                text="썸메이트 다시 찾아보기"
            />
            <S.StyledLink to="/login">로그아웃</S.StyledLink>
        </S.Container>
    );
}
