import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-bottom: 16px;
`;

export const Form = styled.form`
  margin-top: 30px;
`;

export const FormControl = styled.div`
  display: flex;
  padding: 15px;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.textSecondaryColor}; ;
`;

export const Input = styled.input`
  border: none;
  color: ${({ theme }) => theme.textPrimaryColor};
  width: 100%;
  font-size: 16px;
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
      border: 1px solid #bdbdbd;
    `}
`;

export const SearchButton = styled.button`
  border: none;
  color: transparent;
  background-color: transparent;

  :focus {
    cursor: pointer;
    outline: none;
  }
`;

export const Icon = styled.div`
  width: 25px;
  height: 25px;
`;
