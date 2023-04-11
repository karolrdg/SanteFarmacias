import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {
  const navigate = useNavigate();
  const { setLogin } = setLogin();

  const [senha, setSenha] = useState("");

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <form
          autoComplete="off"
          className="col-lg-5 col-md-8 p-4 rounded-3"
          onSubmit={(e) => {
            e.preventDefault();
            setLogin(true);
            navigate("/mapa");
          }}
          style={{ backgroundColor: "#DCE8FF" }}
        >
          <div className="mb-3">
            <h5>Faça o Login para acessar o site:</h5>
          </div>
          <fieldset className="mb-3" id="border">
            <label htmlFor="inputEmail" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              required
              placeholder="Digite o seu melhor e-mail"
            />
          </fieldset>
          <fieldset className="mb-3" id="border">
            <label htmlFor="inputSenha" className="form-label ">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="inputSenha"
              required
              placeholder="Digite a sua senha"
              pattern="^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,30}$"
              onChange={(e) => setSenha(e.target.value)}
            />
          </fieldset>
          <fieldset className="mb-3">
            <span>
              <b>Sua senha deve conter pelo menos:</b>
            </span>
            <br />
            <p>{senha.length >= 8 ? "✔️" : "❌"}8 caracteres</p>
            <p>{senha.search(/[a-z]/) !== -1 ? "✔️" : "❌"}1 letra</p>
            <p>{senha.search(/[0-9]/) !== -1 ? "✔️" : "❌"}1 número</p>
          </fieldset>

          <div className="d-grid gap-2 col-3 mx-auto" id="btn">

            <input value="Entrar" type="submit" style={{ backgroundColor: "#014B7B" }} />
            
          </div>
        </form>
      </div>
    </div>
  );
}
