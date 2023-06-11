import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 36px;

  img {
    height: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    gap: 22px;
    padding: 42px 22px;

    width: 100%;
    max-width: 369px;

    background: var(--color-primary);

    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    h2 {
      font-size: 24px;
      color: var(--grey-0);
      font-weight: 500;
    }
    span {
      font-size: 16px;
      color: var(--grey-1);
      font-weight: 400;
    }
  }
`;
