import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RotaPrivada } from "./RotaPrivada";
import LoginPage from "../pages/LoginPage";
import Mapa from "../pages/Mapa";
import CadastroPharm from "../pages/CadastroPharm";
import CadastroMed from "../pages/CadastroMed";
import ListaMedicamentos from "../pages/ListaMedicamentos";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RotaPrivada />}>
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/cadastra-farmacia" element={<CadastroPharm />} />
          <Route
            path="/cadastra-medicamento"
            element={<CadastroMed />}
          />
          <Route path="/lista-medicamentos" element={<ListaMedicamentos />} />
        </Route>

        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/login" element={<Navigate replace to="/" />} />
        
      </Routes>
    </BrowserRouter>
  );
}
