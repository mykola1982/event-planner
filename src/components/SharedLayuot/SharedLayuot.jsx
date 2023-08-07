import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Loader } from "components/Loader";
import { Header } from "components/Header";

import { LayoutStyled, ContentContainer } from "./SharedLayuot.styled";

export const SharedLayuot = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
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
