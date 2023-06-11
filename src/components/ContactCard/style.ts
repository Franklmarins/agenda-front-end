import styled from "styled-components";

export const StyledContactCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  padding: 10px;

  width: 180px;
  height: fit-content;

  background: var(--color-primary);

  border-radius: 4px;

  cursor: pointer;

  h2 {
    font-size: 16px;
    font-weight: 500;
    color: var(--grey-0);

    display: flex;
    align-items: center;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    color: var(--grey-0);
  }

  &:hover {
    opacity: 80%;
  }
`;
