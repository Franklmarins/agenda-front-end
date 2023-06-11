import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;

  label {
    display: flex;
    flex-direction: column;
    gap: 22px;

    font-size: 16px;
    color: var(--grey-0);
    font-weight: 400;
  }
`;
