import styled from "styled-components";

import { Link } from "react-router-dom";

export const Item = styled.li`
  position: relative;
  height: 480px;
  max-width: 375px;
  border-radius: 12px;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  background: #ffffff;

  transition: ${(p) => p.theme.transitions.main};

  &:hover,
  &:focus {
    cursor: pointer;
    & a {
      display: block;
    }
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    width: 332px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints[2]}) {
    width: 302px;
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
  height: 144px;
  overflow: hidden;
  padding: 16px;
`;

export const WrapperDate = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  position: absolute;
  top: 0;

  background-color: #ffffff;
  opacity: 0.8;
  transform: translateY(-80%);
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
export const DescriptionStyled = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  border-color: #49454f;
  text-overflow: ellipsis;
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

export const LinkStyled = styled(Link)`
  display: none;
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
`;
