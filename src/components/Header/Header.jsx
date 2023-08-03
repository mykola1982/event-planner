import { MainContainer } from "components/Header/MyContainer";

import {
  HeaderStyle,
  WrapperContent,
  Wrapper,
  Logo,
  InputSearch,
  InputSearchMob,
  SelectWrapper,
  Select,
} from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyle>
      <MainContainer>
        <Wrapper>
          <Logo to="/">Event Planner</Logo>
          <InputSearch
            type="text"
            placeholder="Search by keywords"
            name="search"
          />
          <SelectWrapper>
            <Select name="switcher" defaultValue="UK">
              <option value="UK">UK</option>
              <option value="UA">UA</option>
            </Select>
          </SelectWrapper>
        </Wrapper>
        <InputSearchMob
          type="text"
          placeholder="Search by keywords"
          name="search"
        />
      </MainContainer>
    </HeaderStyle>
  );
};
