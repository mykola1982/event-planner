import styled from "styled-components";

export const SectionStyled = styled.section`
  padding: 40px 0;
  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints[2]}) {
    padding: 60px 0;
  }
`;
