import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import { AdminLayout, MainLayout } from "../layouts";
import {
  AdminPage,
  AuthPage,
  ErrorPage,
  MainPage,
  MoviePage,
  MoviesPage,
  PersonPage,
} from "../pages";
import { PrivateRouter } from "../components";

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="movie" element={<MoviePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="person" element={<PersonPage />} />
          <Route path="auth" element={<AuthPage />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route element={<PrivateRouter allowedRoles={["ADMIN"]} />}>
            <Route path="admin" element={<AdminPage />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
