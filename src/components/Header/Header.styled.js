import styled from "styled-components";
import { Link } from "react-router-dom";

import downSvg from "../../images/icons/chevron-down-small.svg";

export const HeaderStyle = styled.header`
  background-color: ${(p) => p.theme.colors.bg};
  border-bottom: 1px solid ${(p) => p.theme.colors.primary};
  padding: 24px 0;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    padding-top: 26px;
    padding-bottom: 18px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints[2]}) {
    padding: 22px 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    display: block;
  }
`;

export const Logo = styled(Link)`
  color: ${(p) => p.theme.colors.primary};
  font-family: Alata;
  font-size: 24px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    display: inline-block;
    margin-right: 80px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints[2]}) {
    margin-right: 630px;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: block;
  width: 69px;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 6px;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background-image: url(${downSvg});
    pointer-events: none;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    display: inline-block;
  }
`;

export const Select = styled.select`
  position: relative;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  width: 100%;
  height: 48px;

  border: none;
  padding: 12px 4px 12px 12px;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &::-ms-expand {
    display: none;
  }
  &:focus {
    outline: none;
  }
`;

export const InputSearch = styled.input`
  display: none;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 300;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;

  width: 100%;
  height: 48px;
  border: none;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 2px 4px 9px 0px #a68dae47;

  &:focus {
    outline: none;
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

export const InputSearchMob = styled.input`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 300;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;

  width: 100%;
  height: 48px;
  border: none;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 2px 4px 9px 0px #a68dae47;

  &:focus {
    outline: none;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    display: none;
  }
`;
