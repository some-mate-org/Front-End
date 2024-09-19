import { useState, useEffect } from 'react';
import QuCharactor from '../../assets/QuCharactor.svg';
import * as S from './SurveyPage.styled'; 
import ProgressBar from '../../components/ProgressBar';
import SurveyCard from '../../components/SurveyCard';
import GenderCard from '../../components/GenderCard';
import { fetchQuestion } from '../../services/surveyService';
import { useNavigate } from 'react-router-dom';

export default function SurveyPage() {
  const [question, setQuestion] = useState({});
  const [answerOptions, setAnswerOptions] = useState([]);
  const [answerList, setAnswerList] = useState([]); // 선택한 값을 담음
  const [currentQuestionId, setCurrentQuestionId] = useState(1); 
  const [mbti, setMbti] = useState([]); // MBTI 배열 상태 추가
  const [progress, setProgress] = useState(0); 
  const TOTAL_QUESTIONS = 10; 
  const TOTAL_TIME = 60; 
  const [timeLeft, setTimeLeft] = useState(`완료까지 ${TOTAL_TIME}초 남았어요!`); 
  const navigate = useNavigate();

  useEffect(() => {
    // 질문과 답변 옵션을 가져옴
    const loadQuestion = async () => {
      try {
        const questionData = await fetchQuestion(currentQuestionId);
        if (questionData) {
          setQuestion(questionData);
          setAnswerOptions([
            { text: questionData.answer1_text, value: questionData.answer1_value },
            { text: questionData.answer2_text, value: questionData.answer2_value }
          ]);
        }
      } catch (error) {
        console.error('Error fetching question:', error);
      }
    };

    loadQuestion();
  }, [currentQuestionId]);

  useEffect(() => {
    // 진행률 업데이트
    const newProgress = ((currentQuestionId - 1) / TOTAL_QUESTIONS) * 100;
    setProgress(newProgress);

    // 남은 시간 계산
    const elapsedTime = ((currentQuestionId - 1) / TOTAL_QUESTIONS) * TOTAL_TIME;
    const remainingTime = TOTAL_TIME - elapsedTime;

    if (remainingTime <= 5) {
      setTimeLeft(`완료까지 ${Math.max(remainingTime, 0)}초 남았어요!`);
    } else {
      setTimeLeft(`완료까지 ${Math.round(remainingTime)}초 남았어요!`);
    }
  }, [currentQuestionId]);

  const handleAnswerSelect = async (value) => {
    // 선택한 answer의 value를 mbti 배열에 추가
    setMbti((prevMbti) => [...prevMbti, value]);

    const newAnswer = { questionId: currentQuestionId, selectedAnswer: value };
    const updatedAnswerList = [...answerList, newAnswer];
    setAnswerList(updatedAnswerList);
    const nextQuestionId = currentQuestionId + 1;

    // 모든 질문이 끝났을 경우
    if (nextQuestionId > TOTAL_QUESTIONS) {
      // 최종 MBTI 계산
      const calculateMBTI = () => {
        const countOccurrences = (arr, target) => arr.filter(item => item === target).length;

        const E_count = countOccurrences(mbti, 'E');
        const I_count = countOccurrences(mbti, 'I');
        const dominantEI = E_count > I_count ? 'E' : 'I';

        const T_count = countOccurrences(mbti, 'T');
        const F_count = countOccurrences(mbti, 'F');
        const dominantTF = T_count > F_count ? 'T' : 'F';

        const P_count = countOccurrences(mbti, 'P');
        const J_count = countOccurrences(mbti, 'J');
        const dominantPJ = P_count > J_count ? 'P' : 'J';

        const dominantSN = mbti.includes('S') ? 'S' : 'N';

        return `${dominantEI}${dominantSN}${dominantTF}${dominantPJ}`;
      };

      const mbtiResult = calculateMBTI();
      console.log('Final MBTI:', mbtiResult);
      navigate(`/result/${mbtiResult.toLowerCase()}`); // 결과 페이지로 이동
    } else {
      setCurrentQuestionId(nextQuestionId);
    }
  };

  return (
    <S.PageWrapper>
      <ProgressBar progress={progress} timeLeft={timeLeft} />
      <S.CustomGenderCardWrapper >
        <GenderCard imageSrc={QuCharactor} title={question.question1_title}  />
      </S.CustomGenderCardWrapper>
    
      <S.Question>
        {question.question2_title && typeof question.question2_title === 'string' ? (
          <S.QuestionText>{question.question2_title}</S.QuestionText>
        ) : (
          <>
            <S.QuestionText>{question.question2_title?.questionText || ''}</S.QuestionText>
            <S.Emoji>{question.question2_title?.emoji || ''}
            </S.Emoji>
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
};
