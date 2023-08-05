import styled from "styled-components";

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
    margin-bottom: 0;
  }
`;
