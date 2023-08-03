import { useMedia } from "react-use";
import { MainContainer } from "components/MyContainer";

import { SearchInput } from "components/SearchInput";
import { Logo } from "components/Logo";
import { LangSwitcher } from "components/LangSwitcher";

import { HeaderStyle, Wrapper } from "./Header.styled";

export const Header = () => {
  const isMobileDevice = useMedia("(max-width: 764px)");

  console.log(isMobileDevice);
  return (
    <HeaderStyle>
      <MainContainer>
        <Wrapper>
          <Logo to="/">Event Planner</Logo>
          {!isMobileDevice && <SearchInput />}
          <LangSwitcher />
        </Wrapper>

        {isMobileDevice && <SearchInput />}
      </MainContainer>
    </HeaderStyle>
  );
};