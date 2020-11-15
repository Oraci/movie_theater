import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 8px;
  border-radius: 4px;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormControl = styled.div`
  box-shadow: 2px 1px 2px 1px #ccc;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 35px;
  border-radius: 40px;
  border: 1px solid ${({ theme }) => theme.textSecondaryColor};
  width: 300px;
  height: 32px;
  position: relative;
  background: white;

  ${(props) =>
    props.disabled &&
    css`
      background: #f2f2f2;
      border: 1px solid #353f4c;
    `}
`;

export const Input = styled.input`
  border: none;
  color: ${({ theme }) => theme.textPrimaryColor};
  width: 100%;
  font-size: 14px;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.textSecondaryColor};
    opacity: 1;
  }

  ${(props) =>
    props.disabled &&
    css`
      background: #f2f2f2;
    `}
`;

export const SearchButton = styled.button`
  border: none;
  outline: none;
  color: transparent;
  background-color: transparent;
  width: 1px;
`;

export const Icon = styled.div`
  left: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
