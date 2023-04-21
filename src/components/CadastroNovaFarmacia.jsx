import { useState, useEffect } from "react";
import { useDadosFarmacia } from "../contexts/useDadosFarmacia";
import { IMaskInput } from "react-imask";
import Form from "react-bootstrap/Form";
export default function CadastroNovaFarmacia({
  logradouro,
  localidade,
  bairro,
  uf,
  lat,
  lng,
}) {
  const { dadosCep, setDadosCep } = useDadosFarmacia();
  const [farmacia, setFarmacia] = useState({});
  let listaFarmacias = JSON.parse(localStorage.getItem("ListaFarmacias"));
  useEffect(() => {
    setFarmacia({
      ...farmacia,
      id: Math.random(),
      logradouro: logradouro,
      bairro: bairro,
      cidade: localidade,
      estado: uf,
      latitude: lat,
      longitude: lng,
    });
  }, [dadosCep, bairro, localidade, logradouro, uf, lat, lng]);

  function armazenaFarmacia() {
    setFarmacia({
      ...farmacia,
      id: Math.random(),
    });
    listaFarmacias.push(farmacia);
    localStorage.setItem("ListaFarmacias", JSON.stringify(listaFarmacias));
    document.getElementById("reset").click();
    alert(`Farmácia cadastrada com sucesso!`);
  }

  return (
    <div
      className="container"
      onLoad={() => document.getElementById("reset").click()}
    >
      <div className="row justify-content-center " id="border">
        <form
          autoComplete="off"
          className="row g-3 mt-5 ps-4 pe-4 pt-5"
          onSubmit={(e) => {
            e.preventDefault();
            armazenaFarmacia();
          }}
          style={{ backgroundColor: "#EEF4FF" }}
        >
          <h4 className="text-center">Cadastro Farmácia</h4>
          <fieldset className="col-md-6 col-lg-4 ">
            <label htmlFor="inputRazaoSocial" className="form-label">
              Razão Social
            </label>
            <input
              value={farmacia.razao || ""}
              type="text"
              className="form-control"
              id="inputRazaoSocial"
              placeholder="Informe a razão social"
              required
              onChange={(e) =>
                setFarmacia({ ...farmacia, razao: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-6 col-lg-4">
            <label htmlFor="inputCNPJ" className="form-label">
              CNPJ
            </label>

            <Form.Control
              value={farmacia.cnpj || ""}
              type="text"
              className="form-control"
              id="inputCNPJ"
              as={IMaskInput}
              mask="00.000.000/0000-00"
              placeholder="Digite seu CNPJ"
              required
              onChange={(e) =>
                setFarmacia({ ...farmacia, cnpj: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-6 col-lg-4">
            <label htmlFor="inputNomeFantasia" className="form-label">
              Nome Fantasia
            </label>
            <input
              value={farmacia.nome || ""}
              type="text"
              className="form-control"
              id="inputNomeFantasia"
              placeholder="Digite o nome fantasia"
              required
              onChange={(e) =>
                setFarmacia({ ...farmacia, nome: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-6 col-lg-4">
            <label htmlFor="inputEmail" className="form-label">
              E-mail
            </label>
            <input
              value={farmacia.email || ""}
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="email@exemplo.com"
              required
              onChange={(e) =>
                setFarmacia({ ...farmacia, email: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-6 col-lg-4">
            <label htmlFor="inputTelefone" className="form-label">
              Telefone
            </label>

            <Form.Control
              value={farmacia.telefone || ""}
              type="number"
              className="form-control"
              id="inputTelefone"
              as={IMaskInput}
              mask="00000000000"
              placeholder="Digite seu telefone"
              onChange={(e) =>
                setFarmacia({ ...farmacia, telefone: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-6 col-lg-4">
            <label htmlFor="inputCelular" className="form-label">
              Celular
            </label>

            <Form.Control
              value={farmacia.celular || ""}
              type="number"
              className="form-control"
              id="inputCelular"
              as={IMaskInput}
              mask="00000000000"
              placeholder="Digite seu celular"
              required
              onChange={(e) =>
                setFarmacia({ ...farmacia, celular: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-2 col-lg-3" id="diminuir-cep">
            <label htmlFor="inputCEP" className="form-label">
              CEP
            </label>

            <Form.Control
              type="number"
              className="form-control"
              id="inputCEP"
              as={IMaskInput}
              mask="00000000"
              placeholder="Digite seu CEP"
              pattern="^(?=.*[0-9])[0-9]{8}$"
              required
              onChange={(e) => setDadosCep(e.target.value)}
            />
          </fieldset>
          <fieldset className="col-md-8 col-lg-6">
            <label htmlFor="inputTelefone" className="form-label">
              Logradouro
            </label>
            <input
              value={farmacia.logradouro || ""}
              type="phone"
              className="form-control"
              id="inputTelefone"
              placeholder="Digite o nome da rua, avenida, rodovia..."
              required
              onChange={(e) =>
                setFarmacia({ ...farmacia, logradouro: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-2 col-lg-3" id="diminuir-input">
            <label htmlFor="inputNumero" className="form-label">
              Número
            </label>
            <input
              value={farmacia.numero || ""}
              type="phone"
              className="form-control"
              id="inputNumero"
              placeholder="0000"
              required
              onChange={(e) =>
                setFarmacia({ ...farmacia, numero: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-6 col-lg-4">
            <label htmlFor="inputBairro" className="form-label">
              Bairro
            </label>
            <input
              value={farmacia.bairro || ""}
              type="text"
              className="form-control"
              id="inputBairro"
              placeholder="Digite o bairro"
              required
              onChange={(e) =>
                setFarmacia({ ...farmacia, bairro: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-6 col-lg-4">
            <label htmlFor="inputCidade" className="form-label">
              Cidade
            </label>
            <input
              value={farmacia.cidade || ""}
              type="text"
              className="form-control"
              id="inputCidade"
              placeholder="Digite a cidade"
              required
              onChange={(e) =>
                setFarmacia({ ...farmacia, cidade: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-6 col-lg-4" id="diminuir-input">
            <label htmlFor="inputEstado" className="form-label">
              Estado
            </label>

            <input
              value={farmacia.estado || ""}
              type="text"
              className="form-control"
              id="inputEstado"
              required
              onChange={(e) =>
                setFarmacia({ ...farmacia, estado: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-6">
            <label htmlFor="inputComplemento" className="form-label">
              Complemento
            </label>
            <input
              value={farmacia.complemento || ""}
              type="text"
              className="form-control"
              id="inputComplemento"
              placeholder="Próximo do que? (Escola, Igreja tal etc)"
              onChange={(e) =>
                setFarmacia({ ...farmacia, complemento: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-6 col-lg-3">
            <label htmlFor="inputLatitude" className="form-label">
              Latitude
            </label>
            <input
              value={farmacia.latitude || ""}
              type="text"
              className="form-control"
              id="inputLatitude"
              placeholder="Digite a latitude"
              required
              onChange={(e) =>
                setFarmacia({ ...farmacia, latitude: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-6 col-lg-3">
            <label htmlFor="inputLongitude" className="form-label">
              Longitude
            </label>
            <input
              value={farmacia.longitude || ""}
              type="text"
              className="form-control"
              id="inputLongitude"
              placeholder="Digite a longitude"
              required
              onChange={(e) =>
                setFarmacia({ ...farmacia, longitude: e.target.value })
              }
            />
          </fieldset>
          <div
            className="d-grid gap-1 d-md-flex justify-content-md-end"
            id="btn"
          >
            <input
              id="reset"
              value="Limpar"
              type="reset"
              className="btn btn-secondary me-md-1"
              onClick={() => {
                setFarmacia({
                  logradouro: "",
                  bairro: "",
                  cidade: "",
                  estado: "",
                  latitude: "",
                  longitude: "",
                });
              }}
            />
            <input
              value="Salvar"
              type="submit"
              style={{ backgroundColor: "#014B7B" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
