import { Routes, Route } from "react-router-dom";
import { Users } from "./pages/Users/Users";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
