import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border: 2px solid green;
`;

export const ContainerList = styled.div`
  justify-content: center;

  display: flex;
  flex-wrap: wrap;
`;

export const NoResults = styled.div`
  justify-content: center;
  display: flex;
  flex: 1;
  align-items: center;
  /* color: white; */
  font-size: 24px;
`;

export const Text = styled.p`
  margin: 30px 0;
  color: white;
  font-weight: bold;
`;
