import styled from "styled-components";

export const DropdownStyled = styled.div`
  display: inline-block;
  position: relative;
  width: 69px;
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
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;

  border: none;
  background: ${(p) => p.theme.colors.mainWhite};
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 120%;
  background: #ffffff;
  width: 100%;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  user-select: none;
  z-index: 1;
  padding: 16px 12px 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DropdownItem = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #aca7c3;
  padding-bottom: 4px;
  border-bottom: 1px solid #aca7c3;
  cursor: pointer;

  transition: ${(p) => p.theme.transitions.main};

  &:hover {
    color: ${(p) => p.theme.colors.primary};
    border-color: ${(p) => p.theme.colors.primary};
  }
`;
