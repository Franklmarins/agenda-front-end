import { Link as LinkButton } from "react-router-dom";
import styled from "styled-components";

const DefaultButton = styled.button`
  height: 48px;
  padding: 0 22px;

  border-radius: 4px;

  color: var(--grey-4);

  font-size: 16px;
  background: var(--color-secondary);

  &:hover {
    opacity: 80%;
  }
`;

export const EnableDisableButton = styled.button`
  padding: 0rem 3.375rem;

  background-color: ${(props) => props.color};
  font-weight: 600;
  font-size: var(--font-size-3);
`;

export const ButtonPrimaryStyles = styled(DefaultButton)``;

export const ButtonSecondaryStyles = styled(DefaultButton)`
  background: var(--grey-3);

  color: var(--grey-0);

  height: 36px;
`;

export const ButtonTerciaryStyles = styled(DefaultButton)`
  background: var(--color-secondary);

  color: var(--grey-2);

  height: 36px;
`;

export const Link = styled(LinkButton)`
  color: var(--grey-1);
`;
