import styled from "styled-components";
import b1 from "../../images/bg/bg.png";
import b2 from "../../images/bg/bg-2x.png";

export const LayoutStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${b1});
  background-repeat: no-repeat;

  background-position: 50% 0;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${b2});
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
`;
