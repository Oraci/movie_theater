import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  background: black;
  color: white;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

export const BackToButton = styled.div`
  padding: 20px 20px 0 0;
  display: flex;
  color: ${({ theme }) => theme.text.lightGrey};
  align-items: center;

  p {
    font-weight: bold;
    font-size: 20px;
    line-height: 18px;
    letter-spacing: 0.01em;
  }
`;

export const BackTo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  margin: 34px 0 48px 0;
  font-size: 48px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  padding: 5px;

  ${(props) =>
    props.borderRigth &&
    css`
      border-top: 1px solid white;
      border-bottom: 1px solid white;
      border-right: 1px solid white;
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
    `}

  ${(props) =>
    props.borderLeft &&
    css`
      border-top: 1px solid ${props.background};
      border-bottom: 1px solid ${props.background};
      border-right: 1px solid ${props.background};
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
    `}

  ${(props) =>
    props.background &&
    css`
      background: ${props.background};
    `}
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.div`
  margin-left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.border.gold};
`;

export const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 16px;

  ${(props) =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `};
`;

export const ContainerOverview = styled.div`
  margin-top: 16px;
  font-size: 24px;
  display: flex;
  flex-direction: column;

  & > p {
    font-size: 21px;
    margin-bottom: 10px;
  }
`;
