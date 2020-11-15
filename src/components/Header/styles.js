import styled from 'styled-components';
import image from 'assets/movies.png';

export const Container = styled.div`
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  height: 232px;
  justify-content: center;
  align-items: center;
  background-color: black;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid white;
  border-radius: 4px;
`;
