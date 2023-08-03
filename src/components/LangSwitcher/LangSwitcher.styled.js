import styled from "styled-components";

import downSvg from "../../images/icons/chevron-down-small.svg";

export const SelectWrapper = styled.div`
  position: relative;
  display: block;
  width: 69px;
  cursor: pointer;

  &::before {
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
