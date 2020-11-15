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
          border: 2px solid #fbc02d;
          background: #97c8d6;
        `
      : css`
          border: 2px solid #d0d0d0;
          background: #d0d0d0;
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
          fill: #fbc02d;
        `
      : css`
          fill: white;
        `}

  ${(props) =>
    props.selected &&
    css`
      fill: #fbc02d;
    `}
`;

export const Button = styled.button`
  display: flex;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 10px;
  border: 1px solid #fbc02d;
  outline: none;
`;
