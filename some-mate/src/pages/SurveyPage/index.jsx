import { useState, useEffect } from 'react';
import QuCharactor from '../../assets/QuCharactor.svg';
import * as S from './SurveyPage.styled';
import ProgressBar from '../../components/ProgressBar';
import SurveyCard from '../../components/SurveyCard';
import GenderCard from '../../components/GenderCard';
import { fetchQuestion } from '../../services/surveyService';
// import postUserInfo from '../../services/postUserInfo';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Context/userContext.jsx';

export default function SurveyPage() {
  const [question, setQuestion] = useState({});
  const [answerOptions, setAnswerOptions] = useState([]);
  const [answerList, setAnswerList] = useState([]); // 선택한 값을 담음
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [mbti, setMbti] = useState([]); // MBTI 배열 상태 추가
  const [progress, setProgress] = useState(0);
  const { userData, updateUser } = useUser();
  const TOTAL_QUESTIONS = 10;
  const TOTAL_TIME = 60;
  const [timeLeft, setTimeLeft] = useState(
    `완료까지 ${TOTAL_TIME}초 남았어요!`
  );
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Updated userData:', userData);
  }, [userData]);

  useEffect(() => {
    console.log(userData, currentQuestionId);
    // 질문과 답변 옵션을 가져옴

    const loadQuestion = async () => {
      try {
        const questionData = await fetchQuestion(currentQuestionId);
        if (questionData) {
          setQuestion(questionData);
          setAnswerOptions([
            {
              text: questionData.answer1_text,
              value: questionData.answer1_value,
            },
            {
              text: questionData.answer2_text,
              value: questionData.answer2_value,
            },
          ]);
        }
      } catch (error) {
        console.error('Error fetching question:', error);
      }
    };

    if (currentQuestionId <= TOTAL_QUESTIONS) loadQuestion();
  }, [currentQuestionId]);

  useEffect(() => {
    // 진행률 업데이트
    const newProgress = ((currentQuestionId - 1) / TOTAL_QUESTIONS) * 100;
    setProgress(newProgress);

    // 남은 시간 계산
    const elapsedTime =
      ((currentQuestionId - 1) / TOTAL_QUESTIONS) * TOTAL_TIME;
    const remainingTime = TOTAL_TIME - elapsedTime;

    if (remainingTime <= 5) {
      setTimeLeft(`완료까지 ${Math.max(remainingTime, 0)}초 남았어요!`);
    } else {
      setTimeLeft(`완료까지 ${Math.round(remainingTime)}초 남았어요!`);
    }
  }, [currentQuestionId]);

  const handleAnswerSelect = async (value) => {
    setMbti((prevMbti) => {
      const updatedMbti = [...prevMbti, value];
  
      if (currentQuestionId === TOTAL_QUESTIONS) {
        // 최종 MBTI 계산
        const calculateMBTI = () => {
          const countOccurrences = (arr, target) =>
            arr.filter((item) => item === target).length;
  
          const E_count = countOccurrences(updatedMbti, 'E');
          const I_count = countOccurrences(updatedMbti, 'I');
          const dominantEI = E_count > I_count ? 'E' : 'I';
  
          const T_count = countOccurrences(updatedMbti, 'T');
          const F_count = countOccurrences(updatedMbti, 'F');
          const dominantTF = T_count > F_count ? 'T' : 'F';
  
          const P_count = countOccurrences(updatedMbti, 'P');
          const J_count = countOccurrences(updatedMbti, 'J');
          const dominantPJ = P_count > J_count ? 'P' : 'J';
  
          const dominantSN = updatedMbti.includes('S') ? 'S' : 'N';
  
          return `${dominantEI}${dominantSN}${dominantTF}${dominantPJ}`;
        };
  
        const mbtiResult = calculateMBTI();
  
        // 상태 업데이트를 비동기로 처리
        setTimeout(() => {
          updateUser({ ...userData, mbti: mbtiResult });
          navigate(`/result/${mbtiResult.toLowerCase()}`);
        }, 0);  // 렌더링 후에 업데이트되도록 딜레이
  
        return updatedMbti;
      }
  
      return updatedMbti;
    });
  
    setAnswerList((prevAnswers) => [
      ...prevAnswers,
      { questionId: currentQuestionId, selectedAnswer: value },
    ]);
  
    setCurrentQuestionId((prevId) => prevId + 1);
  };

  return (
    <S.PageWrapper>
      <ProgressBar progress={progress} timeLeft={timeLeft} />
      <S.CustomGenderCardWrapper>
        <GenderCard imageSrc={QuCharactor} title={question.question1_title} />
      </S.CustomGenderCardWrapper>

      <S.Question>
        {question.question2_title &&
        typeof question.question2_title === 'string' ? (
          <S.QuestionText>{question.question2_title}</S.QuestionText>
        ) : (
          <>
            <S.QuestionText>
              {question.question2_title?.questionText || ''}
            </S.QuestionText>
            <S.Emoji>{question.question2_title?.emoji || ''}</S.Emoji>
          </>
        )}
      </S.Question>
      <S.AnswerWrapper>
        {answerOptions.map((option, index) => (
          <SurveyCard
            key={index}
            title={option.text}
            onClick={() => handleAnswerSelect(option.value)}
          />
        ))}
      </S.AnswerWrapper>
    </S.PageWrapper>
  );
}