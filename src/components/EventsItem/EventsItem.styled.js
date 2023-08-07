import styled from "styled-components";

import { Link } from "react-router-dom";

export const Item = styled.li`
  display: block;
  position: relative;
  height: 480px;
  width: 100%;
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  overflow: hidden;

  & div {
    transition: ${(p) => p.theme.transitions.main};
  }

  &:hover,
  &:focus {
    cursor: pointer;
    & #wrapperInfo {
      transform: translateY(-56px);
    }
    & a {
      display: block;
      margin-top: 10px;
    }
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    width: 332px;
    /* max-width: 0; */
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints[2]}) {
    width: 302px;
    /* max-width: 0; */
  }
`;

export const Image = styled.img`
  display: block;
  height: 336px;
  border-radius: 12px 12px 0 0;
  object-fit: cover;
  width: 100%;
`;

export const WrapperInfo = styled.div`
  height: 200px;
  padding: 16px;
  position: absolute;
  bottom: -56px;
  z-index: 3;
  background-color: #fff;
  width: inherit;
`;

export const WrapperDate = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  position: absolute;
  top: 0;
  left: 0;

  background-color: #ffffff;
  opacity: 0.8;
  transform: translateY(-99%);
  & p {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color: ${(p) => p.theme.colors.primary};
  }
`;

export const TitleStyled = styled.h3`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #1c1b1f;
  margin-bottom: 16px;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 72px;
`;

export const DescriptionStyled = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  letter-spacing: 0px;
  text-align: left;
  border-color: #49454f;
  width: 100%;
  height: auto;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const LinkStyled = styled(Link)`
  width: 114px;
  padding: 10px 24px;
  border-radius: 8px;
  background: #7b61ff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;
  margin-left: auto;
  margin-top: 20px;
  display: block;
`;

export const CategoryAndPriorytyWrapper = styled.div`
  position: absolute;
  display: flex;
  gap: 12px;
  top: 12px;
  left: 12px;
`;

export const PriorityStyled = styled.p`
  padding: 6px 12px;
  border-radius: 8px;
  background: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
`;
export const CategoryStyled = styled.p`
  padding: 6px 12px;
  border-radius: 8px;
  background: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: ${(p) => p.theme.colors.primary};
`;
