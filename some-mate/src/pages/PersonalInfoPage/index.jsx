import ProgressBar from '../../components/ProgressBar'; 
import GenderCard from '../../components/GenderCard'; 
import QuCharactor from '../../assets/QuCharactor.svg';
import InputBox from '../../components/InputBox'; 
import { Container, Title } from './PersonalInfoPage.styled';

export default function PersonalInfoPage() {
  return (
    <Container>
      <ProgressBar progress={66} timeLeft="가입까지 15초 남았어요!" />

      <Title>
        당신의 정보를<br />
        <span>모두</span> 작성해주세요
      </Title>
      
      <GenderCard 
        imageSrc={QuCharactor} 
        title="빠짐없이 다 작성해줘!" 
      />
      
      <InputBox placeholder="이름" />
      <InputBox placeholder="카카오톡 아이디" />
      <InputBox placeholder="비밀번호" />
      <InputBox placeholder="나이" />
    </Container>
  );
}
