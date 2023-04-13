import { NavLink } from "react-router-dom";
import logo from "../img/logo-pha.png";

export default function HeaderNav() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ backgroundColor: "#014B7B" }}
    >
      <div className="container-fluid">
        <NavLink
          className="navbar-brand"
          id="logo-name"
          to={"/home"}
          activeclassname="active-link">
        
          <img
            src={logo}
            alt=""
            width="46"
            height="44"
            className="d-inline-block align-text-center"
          />
          <b id="space">SANTÉ FARMA</b>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex justify-content-end">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li key="cadastra-farmacia" className="nav-item">
                <NavLink
                  className="nav-link"
                  type="button"
                  to={"/cadastra-farmacia"}
                  activeclassname="active-link"
                  id="nav-list"
                >
                  Cadastro de Novas Farmácias
                </NavLink>
              </li>
              <li key="cadastra-medicamento" className="nav-item">
                <NavLink
                  className="nav-link"
                  type="button"
                  to={"/cadastra-medicamento"}
                  activeclassname="active-link"
                  id="nav-list"
                >
                  Cadastro de Medicamentos
                </NavLink>
              </li>
              <li key="lista-medicamentos" className="nav-item">
                <NavLink
                  className="nav-link"
                  type="button"
                  to={"/lista-medicamentos"}
                  activeclassname="active-link"
                  id="nav-list"
                >
                  Lista de Medicamentos
                </NavLink>
              </li>
              <li key="perguntas-freq" className="nav-item">
                <NavLink
                  className="nav-link"
                  type="button"
                  to={"/ajuda"}
                  activeclassname="active-link"
                  id="nav-list"
                >
                  Ajuda
                </NavLink>
              </li>
              <li key="mapa" className="nav-item">
                <NavLink
                  className="nav-link btn btn-sm btn-dark border-0 rounded-5 pe-3"
                  type="button"
                  to={"/mapa"}
                  activeclassname="active-link"
                  id="nav-list"
                >
                   Mapa
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
