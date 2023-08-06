import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as BackIcon } from "images/icons/arrow-left.svg";

export const Button = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 67px;
`;

export const IconButton = styled(BackIcon)`
  stroke: ${(p) => p.theme.colors.primary};
`;

export const ButtonTitle = styled.span`
  color: ${(p) => p.theme.colors.primary};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;
