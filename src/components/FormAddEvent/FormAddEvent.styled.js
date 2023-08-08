import styled from "styled-components";

import { Form, Field, ErrorMessage } from "formik";

export const StyledForm = styled(Form)`
  width: 100%;
  margin: 0 auto;

  border-radius: 8px;
  padding: 40px 24px;

  background: #ffffff;
  box-shadow: 2px 4px 9px 0px #a68dae47;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    width: 688px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints[2]}) {
    width: 1280px;
    padding: 40px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints[2]}) {
    column-gap: 42px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    width: 308px;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints[2]}) {
    width: 372px;
  }
`;

export const Label = styled.label`
  width: 100%;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  text-align: left;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 8px;
`;

export const Input = styled(Field)`
  width: 100%;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  padding: 16px 12px;
  border-radius: 8px;

  border: 1px solid #aca7c3;

  transition: ${(p) => p.theme.transitions.main};

  &:hover,
  &:focus {
    border-color: ${(p) => p.theme.colors.primary};
    outline: none;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: right;
  color: #ff2b77;
  margin-left: auto;
  margin-top: 8px;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px 12px;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  border: none;
  background: ${(p) => p.theme.colors.primary};
  transition: ${(p) => p.theme.transitions.main};

  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;

  color: #ffffff;
  margin-top: 40px;
  margin-left: auto;

  &:hover,
  &:focus {
    background: ${(p) => p.theme.colors.hoverBtn};
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints[1]}) {
    width: 193px;
  }
`;
