import styled from "styled-components";

export const Container = styled.div`
  max-width: ${(p) => p.theme.breakpoints[0]};
  margin: 0 auto;
  padding: 0 24px;

  @media screen and (min-width: 768px) {
    max-width: ${(p) => p.theme.breakpoints[1]};
    padding: 0 40px;
  }

  @media screen and (min-width: 1440px) {
    max-width: ${(p) => p.theme.breakpoints[2]};
    padding: 0 80px;
  }
`;
