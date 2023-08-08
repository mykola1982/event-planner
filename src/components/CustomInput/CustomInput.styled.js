import styled from "styled-components";

import { ReactComponent as DeleteIcon } from "images/icons/cross-small.svg";

export const DeleteButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  background-color: inherit;
  border: none;
`;

export const DeleteIconStyled = styled(DeleteIcon)`
  width: 24px;
  height: 24px;
`;
