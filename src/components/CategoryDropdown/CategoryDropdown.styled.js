import styled from "styled-components";

export const DropdownStyled = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  user-select: none;
`;

export const DropdownBtn = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  padding: 16px;
  & svg {
    stroke: ${(p) => p.theme.colors.mainBlack};
  }
`;

export const DropdownBtnTitle = styled.div`
  display: none;
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 0px 4px 10px 0px #00000040;
  border-radius: 8px;
  border-bottom: 1px solid #aca7c3;

  width: 158px;
  user-select: none;

  & div:not(:last-child) {
    border-bottom: 1px solid #aca7c3;
  }
`;

export const DropdownContentHeader = styled.div`
  width: 100%;
  padding: 16px 21px 16px 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #aca7c3;
  color: ${(p) => p.theme.colors.primary};

  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;

  & svg {
    stroke: ${(p) => p.theme.colors.primary};
  }
`;

export const DropdownList = styled.ul`
  & li:not(:last-child) {
    border-bottom: 1px solid #aca7c3;
  }
  & li:not(:last-child):hover {
    border-color: ${(p) => p.theme.colors.primary};
  }
`;

export const DropdownItem = styled.li`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: #aca7c3;
  padding: 8px 24px 8px 24px;

  cursor: pointer;

  &:hover {
    color: ${(p) => p.theme.colors.primary};
  }
`;
