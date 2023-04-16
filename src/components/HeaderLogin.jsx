import { NavLink } from "react-router-dom";
import logo from "../img/logo-pha.png";

export default function HeaderLogin() {
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
          <span id="nome-lab">by LABPharmacy Inc </span>
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
          <span className="navbar-toggler-icon" id="hamburguer"></span>
        </button>
        <div className="d-flex justify-content-end">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li key="FAQ" className="nav-item">
                <NavLink
                  className="nav-link"
                  type="button"
                  to={"/faq"}
                  activeclassname="active-link"
                  id="FAQ"
                >
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
