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
          activeclassname="active-link"
        >
          <img
            src={logo}
            alt=""
            width="46"
            height="44"
            className="d-inline-block align-text-center"
          />
          <b id="nome-farma">SANTÉ FARMA</b>
          <span id="nome-lab">by LABPharmacy Inc - Central System </span>
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
          <span className="navbar-toggler-icon" id="hamburguer" ></span>
        </button>
        <div className="d-flex justify-content-end"  >
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 " id="responsive-menu">
              <li key="cadastra-farmacia" className="nav-item">
                <NavLink
                  className="nav-link"
                  type="button"
                  to={"/cadastra-farmacia"}
                  activeclassname="active-link"
                  id="nav-list"
                >
                  CADASTRO DE FARMÁCIA
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
                  CADASTRO DE MEDICAMENTO
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
                  ESTOQUE MEDICAMENTO
                </NavLink>
              </li>
              <li key="faq" className="nav-item">
                <NavLink
                  className="nav-link"
                  type="button"
                  to={"/FAQ"}
                  activeclassname="active-link"
                  id="FAQ"
                >
                  FAQ
                </NavLink>
              </li>
              <li key="mapa" className="nav-item">
                <NavLink
                  type="button"
                  to={"/mapa"}
                  activeclassname="active-link"
                  id="mapa"
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
