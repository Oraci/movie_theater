import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* border: 2px solid orange; */
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 16px 0;

  & > h1 {
    margin-left: 5px;
  }
`;
