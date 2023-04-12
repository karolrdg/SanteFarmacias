import { useState } from "react";
export default function CadastroMedicamento() {

  const [medicamento, setMedicamento] = useState({
    id: Math.random(),
  });
 
  let listaMedicamentos = JSON.parse(localStorage.getItem("ListaMedicamentos"));

  function armazenaMedicamento(e) {
    e.preventDefault();
    listaMedicamentos.push(medicamento);
    localStorage.setItem(
      "ListaMedicamentos",
      JSON.stringify(listaMedicamentos)
    );
    document.getElementById("reset").click();
    alert(`Medicação cadastrada com sucesso!`);
  }
  return (
    <div className="container">
      <div className="row justify-content-center mt-2 pt-5">
        <form
          autoComplete="off"
          className="row g-3 p-4"
          onSubmit={armazenaMedicamento}
        >
          <h4>Cadastro Medicamento:</h4>
          <fieldset className="col-md-6">
            <label htmlFor="inputMedicamento" className="form-label">
              Medicamento
            </label>
            <input
              value={medicamento.medicamento || ""}
              type="text"
              className="form-control"
              id="inputMedicamento"
              placeholder="Informe o nome do medicamento"
              required
              onChange={(e) =>
                setMedicamento({ ...medicamento, medicamento: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-6">
            <label htmlFor="inputLaboratorio" className="form-label">
              Laboratório
            </label>
            <input
              value={medicamento.laboratorio || ""}
              type="text"
              className="form-control"
              id="inputLaboratorio"
              placeholder="Informe o laboratório"
              required
              onChange={(e) =>
                setMedicamento({ ...medicamento, laboratorio: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-4">
            <label htmlFor="inputDosagem" className="form-label">
              Dosagem
            </label>
            <input
              value={medicamento.dosagem || ""}
              type="text"
              className="form-control"
              id="inputDosagem"
              placeholder="Informe a dosagem"
              required
              onChange={(e) =>
                setMedicamento({ ...medicamento, dosagem: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-4">
            <label htmlFor="inputPreco" className="form-label">
              Preço unitário
            </label>
            <input
              value={medicamento.preco || ""}
              type="text"
              className="form-control"
              id="inputPreco"
              placeholder="Informe o preço unitário"
              required
              onChange={(e) =>
                setMedicamento({ ...medicamento, preco: e.target.value })
              }
            />
          </fieldset>
          <fieldset className="col-md-4">
            <label htmlFor="inputTipo" className="form-label">
              Tipo de medicamento
            </label>
            <select
              id="inputTipo"
              className="form-select"
              aria-label="Selecione o tipo do medicamento"
              required
              onChange={(e) =>
                setMedicamento({ ...medicamento, tipo: e.target.value })
              }
            >
              <option defaultValue></option>
              <option value="Medicamento controlado">
                Medicamento controlado
              </option>
              <option value="Medicamento comum">Medicamento comum</option>
            </select>
          </fieldset>
          <fieldset className="col-md-12">
            <label htmlFor="inputDescricao" className="form-label">
              Descrição
            </label>
            <textarea
              value={medicamento.descricao || ""}
              className="form-control"
              id="inputDescricao"
              rows="5"
              maxLength={870}
              onChange={(e) =>
                setMedicamento({ ...medicamento, descricao: e.target.value })
              }
            ></textarea>
          </fieldset>
          <div className="d-grid gap-1 d-md-flex justify-content-md-end" id="btn">
            <input
              id="reset"
              value="Limpar"
              type="reset"
              className="btn btn-secondary me-md-1"
              onClick={() => {
                setMedicamento({
                  id: Math.random(),
                  medicamento: "",
                  laboratorio: "",
                  dosagem: "",
                  preco: "",
                  tipo: "",
                  descricao: "",
                });
              }}
            />
            <input
              value="Cadastrar"
              type="submit"
              style={{ backgroundColor: "#014B7B" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
