import { ThemeProvider } from "styled-components";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { theme } from "constants/theme";
import { GlobalStyle } from "./GlobalStyle";
import { SharedLayuot } from "./SharedLayuot";

const HomePage = lazy(() => import("pages/HomePage"));
const AddEventPage = lazy(() => import("pages/AddEventPage"));
const EventDetailsPage = lazy(() => import("pages/EventDetailsPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));

export const App = () => {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayuot />}>
          <Route index element={<HomePage />} />
          <Route path="/add" element={<AddEventPage />} />
          <Route path="/events/:eventId" element={<EventDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
