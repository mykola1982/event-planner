import styled from "styled-components";

import searchSvg from "images/icons/search.svg";
import { ReactComponent as DeleteIcon } from "images/icons/cross-small.svg";

export const InputSearchWrapper = styled.label`
  position: relative;
  width: 320px;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background-image: url(${searchSvg});
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    display: inline-block;
    width: 368px;
    margin-right: 24px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints[2]}) {
    width: 410px;
  }
`;

export const InputSearch = styled.input`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 300;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(p) => p.theme.colors.primary};

  width: 100%;
  height: 48px;
  border: none;
  padding: 12px 12px 12px 48px;
  border-radius: 10px;
  box-shadow: 2px 4px 9px 0px #a68dae47;

  &:focus {
    outline: none;
  }
`;

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
