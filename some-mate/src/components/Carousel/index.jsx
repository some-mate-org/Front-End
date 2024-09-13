import { useEffect, useState } from 'react';
import * as S from './Carousel.styled';
import { ImageList } from './Carousel.styled';

export default function Carousel({ images }) {
  const TOTAL_SLIDES = images.length - 1;
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx === TOTAL_SLIDES ? 0 : prevIdx + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIdx]);

  return (
    <>
      <S.Wrapper>
        <S.Container count={currentIdx}>
          {images.map((ImageComponent, index) => (
            <S.ImageList key={index}>
              <ImageComponent />
            </S.ImageList>
          ))}
        </S.Container>
      </S.Wrapper>
      {/* <S.CarouselBtn /> */}
    </>
  );
}
