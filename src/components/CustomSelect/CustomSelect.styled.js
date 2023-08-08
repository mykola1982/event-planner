import styled from "styled-components";

export const DropdownStyled = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  user-select: none;
`;

export const DropdownBtn = styled.button`
  width: 100%;
  height: 100%;
  padding: 12px 6px 12px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: inherit;

  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  border: none;
  background: ${(p) => p.theme.colors.mainWhite};
`;

export const DropdownContent = styled.ul`
  position: absolute;
  top: 120%;
  background: #ffffff;
  width: 100%;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  user-select: none;
  z-index: 1;
  padding: 0px 16px;
  display: flex;
  flex-direction: column;

  transition: ${(p) => p.theme.transitions.main};
  & li:not(:last-child) {
    border-bottom: 1px solid #aca7c3;
  }
  & li:not(:last-child):hover {
    border-color: ${(p) => p.theme.colors.primary};
  }
`;

export const DropdownItem = styled.li`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  color: #3f3f3f;
  padding: 16px 0px;

  cursor: pointer;

  transition: ${(p) => p.theme.transitions.main};

  &:hover {
    color: ${(p) => p.theme.colors.primary};
  }
`;
