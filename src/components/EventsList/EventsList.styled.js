import styled from "styled-components";

export const EventsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    flex-direction: row;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints[2]}) {
  }
`;
