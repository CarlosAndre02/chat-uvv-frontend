import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SignupPage = lazy(() => import('../modules/auth/SignupPage'));
const LoginPage = lazy(() => import('../modules/auth/LoginPage'));

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
  </Routes>
);
