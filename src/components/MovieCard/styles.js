import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 0 10px 10px;
  cursor: pointer;
  background: black;
`;

export const Header = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 185px;
`;
