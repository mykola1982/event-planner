import styled from "styled-components";

export const EventsListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 24px;
  justify-items: center;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints[2]}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
