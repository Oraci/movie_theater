import styled, { css } from 'styled-components';

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

export const Img = styled.img`
  opacity: 1;
  transition: 0.2s ease;
  backface-visibility: hidden;
`;

export const Info = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  transform: translate(-10px, -10px);
  -ms-transform: translate(-10px, -10px);
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};

  > div {
    color: white;
    font-size: 16px;
    padding: 12px 16px;
  }

  ${(props) =>
    props.top &&
    css`
      top: ${props.top};
    `}

  ${(props) =>
    props.left &&
    css`
      left: ${props.left};
    `}

  ${(props) =>
    props.bottom &&
    css`
      bottom: ${props.bottom};
    `}

  ${(props) =>
    props.right &&
    css`
      right: ${props.right};
    `}
`;

export const Header = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 185px;

  &:hover img {
    opacity: 0.1;
  }

  &:hover div {
    opacity: 1;
  }
`;
