import styled from "styled-components";

export const Title = styled.h2`
  display: block;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;

  text-align: left;
  color: #3f3f3f;
  margin-right: auto;
  margin-bottom: 24px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    font-size: 32px;
    line-height: 48px;
  }
`;
