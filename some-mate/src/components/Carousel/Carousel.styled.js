import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 2.9rem;
  position: relative;
  background-color: #fff;
  box-shadow: rgb(100 100 111 / 20%) 0 7px 29px 0;
  border-radius: 10px;
  width: 18rem;
  height: 16rem;
  overflow: hidden;
`;

export const Container = styled.ul`
  padding: 0;
  margin: 0;
  transform: ${(props) => `translateY(calc(-${props.count} * (16rem)))`};
`;

export const ImageList = styled.li`
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 16rem;
`;

export const CarouselBtn = styled.div`
  display: inline-block;
  border-radius: 10px;
  width: 8px;
`;
