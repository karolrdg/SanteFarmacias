import { Navigate, Outlet } from "react-router-dom";
import { useLogin } from "../contexts/useLogin";

export function RotaPrivada() {
  const { login } = useLogin();
  console.log(`Estado do login: ${login}`);
  return login ? <Outlet /> : <Navigate to="/home" replace />;
}