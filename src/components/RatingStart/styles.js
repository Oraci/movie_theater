import styled, { css } from 'styled-components';

export const Container = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentStar = styled.div`
  border: 1px solid green;
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
          fill: #d0d0d0;
        `}

  ${(props) =>
    props.selected &&
    css`
      fill: #fbc02d;
    `}
`;

export const Button = styled.button``;
