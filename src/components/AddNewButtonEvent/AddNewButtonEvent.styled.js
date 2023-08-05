import styled from "styled-components";

import { Link } from "react-router-dom";

import { ReactComponent as PlusIcon } from "images/icons/plus.svg";

export const ButtonStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  background: ${(p) => p.theme.colors.primary};

  transition: ${(p) => p.theme.transitions.main};

  &:hover,
  &:focus {
    background: ${(p) => p.theme.colors.hoverBtn};
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    justify-content: space-between;
    width: 193px;
    padding: 16px 12px 16px 12px;
  }
`;

export const BtnTitle = styled.span`
  display: none;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    display: block;

    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: ${(p) => p.theme.colors.mainWhite};
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints[2]}) {
  }
`;

export const PlusIconStyled = styled(PlusIcon)`
  width: 24px;
  height: 24px;
  stroke: #ffffff;
`;
