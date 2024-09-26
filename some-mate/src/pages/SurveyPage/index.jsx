/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import QuCharactor from '../../assets/QuCharactor.svg';
import * as S from './SurveyPage.styled';
import Typical from 'react-typical'; // 타이핑 효과를 위한 라이브러리
import ProgressBar from '../../components/ProgressBar';
import SurveyCard from '../../components/SurveyCard';
import GenderCard from '../../components/GenderCard';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Context/userContext.jsx';
import { getQuestionList } from '../../services/getQuestionList.js';

export default function SurveyPage() {
  const [questionList, setQuestionList] = useState([]);
  const [question, setQuestion] = useState({});
  const [title, setTitle] = useState([]);
  const [answerOptions, setAnswerOptions] = useState([]);
  const [answerList, setAnswerList] = useState([]);
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [mbti, setMbti] = useState([]);
  const [progress, setProgress] = useState(0);

  const { userData, updateUser } = useUser();
  const navigate = useNavigate();

  const TOTAL_QUESTIONS = 10;
  const TOTAL_TIME = 60;
  const [timeLeft, setTimeLeft] = useState(
    `완료까지 ${TOTAL_TIME}초 남았어요!`
  );

  // 질문 목록을 받아오는 함수
  useEffect(() => {
    const loadQuestionList = async () => {
      await getQuestionList(setQuestionList);
    };

    if (currentQuestionId <= TOTAL_QUESTIONS) loadQuestionList();
  }, []);

  // questionList가 업데이트된 후 질문을 로드
  useEffect(() => {
    if (questionList.length > 0 && currentQuestionId <= TOTAL_QUESTIONS) {
      loadQuestion();
    }
  }, [questionList, currentQuestionId]);

  const loadQuestion = () => {
    const questionData = questionList[currentQuestionId - 1];
    if (questionData) {
      setQuestion(questionData);
      setTitle(questionData.question2_title.split('/'));
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
  };

  // 진행률 및 남은 시간 업데이트
  useEffect(() => {
    const newProgress = ((currentQuestionId - 1) / TOTAL_QUESTIONS) * 100;
    setProgress(newProgress);

    const elapsedTime =
      ((currentQuestionId - 1) / TOTAL_QUESTIONS) * TOTAL_TIME;
    const remainingTime = TOTAL_TIME - elapsedTime;

    if (remainingTime <= 5) {
      setTimeLeft(`완료까지 ${Math.max(remainingTime, 0)}초 남았어요!`);
    } else {
      setTimeLeft(`완료까지 ${Math.round(remainingTime)}초 남았어요!`);
    }
  }, [currentQuestionId]);

  // 답변 선택 시 처리 함수
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
        }, 0); // 렌더링 후에 업데이트되도록 딜레이

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
        <S.QuestionText>
          <Typical
            steps={[title[0], 1]} //MBTI 질문 타이핑 효과 적용
            loop={1}
            wrapper="span"
          />
        </S.QuestionText>
        <S.Emoji>{title[1]}</S.Emoji>
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
