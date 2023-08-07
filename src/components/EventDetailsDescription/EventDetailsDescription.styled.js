import styled from "styled-components";

import { Link } from "react-router-dom";

export const WrapperDetails = styled.div`
  display: block;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[2]}) {
    width: 628px;
    margin: 0 auto;
  }
`;

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

export const CartDetails = styled.div`
  width: 100%;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  background-color: #fff;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    width: 688px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints[2]}) {
    width: 628px;
  }
`;

export const Image = styled.img`
  display: block;
  border-radius: inherit;
  height: 168px;

  object-fit: cover;
  width: 100%;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    height: 272px;
  }
`;
export const Wrapper = styled.div`
  padding: 24px 16px 32px 16px;
`;

export const DescriptionStyled = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;

  margin-bottom: 24px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  & p {
    padding: 6px 12px;
    border-radius: 8px;
    background: #ffffff;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
    box-shadow: 4px 5px 9px 0px #a68dae47;
    color: ${(p) => p.theme.colors.primary};
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    justify-content: flex-end;
    gap: 16px;
  }
`;

export const ButtonEdit = styled(Link)`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  width: 108px;
  border: 1px solid #7b61ff;
  background-color: #fff;
  padding: 8px 16px 8px 16px;
  border-radius: 4px;
  color: ${(p) => p.theme.colors.primary};

  transition: ${(p) => p.theme.transitions.main};

  &:hover,
  &:focus {
    background: ${(p) => p.theme.colors.hoverBtn};
    color: #fff;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    width: 55px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints[2]}) {
  }
`;

export const ButtonDelete = styled.button`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  width: 108px;
  background: ${(p) => p.theme.colors.primary};
  transition: ${(p) => p.theme.transitions.main};
  padding: 8px 16px 8px 16px;
  border-radius: 4px;
  color: #fff;
  border: none;
  &:hover,
  &:focus {
    background: ${(p) => p.theme.colors.hoverBtn};
  }
`;
