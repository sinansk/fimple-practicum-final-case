import { useResult } from "./context/ResultContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { result } = useResult();
  return result ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
