import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../contexts/useLogin";

export default function Login() {
  const navigate = useNavigate();
  const { setLogin } = useLogin();

  const [senha, setSenha] = useState("");

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <form
          autoComplete="off"
          className="col-lg-4 col-md-8 p-4 rounded-3"
          onSubmit={(e) => {
            e.preventDefault();
            setLogin(true);
            navigate("/mapa");
          }}
          style={{ backgroundColor: "#EEF4FF" }}
        >
          <div className="mb-3">
            <h5>Faça o Login para acessar o site</h5>
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

          <fieldset className="mb-2" id="senha">
            <span id="span">
              <b>Sua senha deve conter:</b>
            </span>
            <br />
            <p>{senha.length >= 12 ? "✔️" : ""}Pelo menos 8 caracteres</p>

            <p>
              {senha.search(/[0-9]/) !== -1 ? "✔️" : ""}Pelo menos um número
            </p>

            <p>
              {senha.search(/[A-Z]/) !== -1 ? "✔️" : ""}Pelo menos uma letra
              maiúscula
            </p>
          </fieldset>

          <div className="esqueceu-senha" id="esqueceu-senha">
            <a href="#">Esqueceu a senha?</a>
          </div>

          <div className="d-grid gap-2 col-4 mt-2 mx-auto" id="btn">
            <input
              value="Acessar"
              type="submit"
              style={{ backgroundColor: "#014B7B" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
