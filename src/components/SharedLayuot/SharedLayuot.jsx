import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "components/Header";

export const SharedLayuot = () => {
  return (
    <>
      <Header />
      <Suspense fallback={"загрузка сторінки"}>
        <Outlet />
      </Suspense>
    </>
  );
};
