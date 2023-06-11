import { styled } from "styled-components";

export const StyledDashboard = styled.div`
  height: 100vh;
  > div {
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;

    width: fit-content;

    gap: 10px;

    margin-top: 20px;
  }
`;
