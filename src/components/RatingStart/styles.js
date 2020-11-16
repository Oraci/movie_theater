import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 4px;
  padding: 5px;

  ${(props) =>
    props.rating
      ? css`
          border: 2px solid ${({ theme }) => theme.border.yellow};
          background: ${({ theme }) => theme.background.sinbad};
        `
      : css`
          border: 2px solid ${({ theme }) => theme.border.alto};
          background: ${({ theme }) => theme.background.alto};
        `}
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    margin: 0 5px;
  }
`;

export const ContentStar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Svg = styled.svg`
  cursor: pointer;
  width: 20px;
  height: 20px;

  ${(props) =>
    props.hoverColor
      ? css`
          transform: scale(1.2);
          fill: ${({ theme }) => theme.background.yellow};
        `
      : css`
          fill: white;
        `}

  ${(props) =>
    props.selected &&
    css`
      fill: ${({ theme }) => theme.background.yellow};
    `}
`;

export const Button = styled.button`
  display: flex;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.border.yellow};
  outline: none;
`;
