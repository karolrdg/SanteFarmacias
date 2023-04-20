import caixaMed from "../img/caixa-medicamento.png";

export default function CardMedicamento({
  dosagem,
  medicamento,
  laboratorio,
  preco,
  tipo,
  id,
  descricao,
  excluir,
}) {
  let novoId = id.toString();

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card">
        <div
          className="card-body"
          data-bs-toggle="modal"
          data-bs-target={`#a${novoId.substring(2, 13)}`}
          style={{ backgroundColor: "#ffffff" }}
        >
          <h5 className="card-title">{medicamento}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{dosagem}</h6>
          <p className="card-text">
            {descricao ? descricao.substring(0, 57) : null}..
          </p>
          <div className="d-grid col-5 mx-auto">
            <button className="btn-list-med ">Informações</button>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id={`a${novoId.substring(2, 13)}`}
        tabIndex="-1"
        aria-labelledby={`a${novoId.substring(2, 13)}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`a${novoId.substring(2, 13)}`}>
                Mais informações:
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row d-flex justify-content-center" id="caixa-medicamento" >
                <img src={caixaMed} />
              </div>
              <span>
                <b>Medicamento:</b> {medicamento}
              </span>
              <br />
              <span>
                <b>Dosagem:</b> {dosagem}
              </span>
              <br />
              <span>
                <b>Laboratório:</b> {laboratorio}
              </span>
              <br />
              <span>
                <b>Tipo:</b> {tipo}
              </span>
              <br />
              <span>
                <b>Preço:</b> R$ {preco}
              </span>
              <br />
              {descricao ? (
                <span>
                  <b>Descrição:</b> {descricao}
                  <br />
                </span>
              ) : null}

              

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn-list-med"
                data-bs-dismiss="modal"
                onClick={() => {
                  excluir(id);
                }}
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
