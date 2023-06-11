import { styled } from "styled-components";

export const StyledInput = styled.input`
  height: 48px;

  padding: 0 16px;

  border-radius: 4px;
  border: 1px solid var(--color-contrast);

  background: var(--grey-0);

  font-size: 14px;
  font-weight: 400;

  color: var(--grey-3);

  :disabled {
    cursor: not-allowed;
  }

  :focus {
    outline: none;
    border: 1px solid var(--grey-1);
    ::placeholder {
      color: var(--grey-1);
    }
  }

  ::placeholder {
    font-size: 14px;
    font-weight: 400;
  }
`;
