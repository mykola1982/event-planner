import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "components/Header";

import { LayoutStyled, ContentContainer } from "./SharedLayuot.styled";

export const SharedLayuot = () => {
  return (
    <>
      <Suspense fallback={"загрузка сторінки"}>
        <Header />

        <main>
          <LayoutStyled>
            <ContentContainer>
              <Outlet />
            </ContentContainer>
          </LayoutStyled>
        </main>
      </Suspense>
    </>
  );
};
