import styled from "styled-components";

export const ButtonSection = styled.section`
  display: flex;
  gap: 24px;
  justify-content: end;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints[2]}) {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  display: none;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    display: block;
    font-family: Poppins;
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: #3f3f3f;
    margin-right: auto;
    margin-bottom: 24px;
  }
`;
