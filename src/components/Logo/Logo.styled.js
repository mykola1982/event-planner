import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoStyled = styled(Link)`
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
