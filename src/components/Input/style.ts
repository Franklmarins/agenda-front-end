import { styled } from "styled-components";

export const StyledInput = styled.input`
  height: 48px;

  padding: 0 16px;

  border-radius: 4px;
  border: 1px solid var(--grey-2);

  background: var(--grey-2);

  font-size: var(--font-size-2);
  font-weight: var(--font-weight-2);

  color: var(--grey-1);

  :disabled {
    cursor: not-allowed;
  }

  :focus {
    outline: none;
    border: 1px solid var(--grey-0);
    ::placeholder {
      color: var(--grey-0);
    }
  }

  ::placeholder {
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-2);

    color: var(--grey-1);
  }
`;
