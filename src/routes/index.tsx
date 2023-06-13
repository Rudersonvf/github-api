import { Navigate, Route, Routes } from "react-router-dom";
import Index from "../pages/Main";
import Home from "../pages/Main/Home";
import Search from "../pages/Main/Search";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="search" element={<Search />} />
      </Route>
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
