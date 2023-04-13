import HeaderNav from "../components/HeaderNav";
import CardMedicamento from "../components/CardMedicamento";
import { useState, useEffect } from "react";
export default function ListaMedicamentos() {
  
  let listaMedicamentos = JSON.parse(localStorage.getItem("ListaMedicamentos"));
  
  const [listaAnterior, setListaAnterior] = useState(JSON.parse(localStorage.getItem("ListaMedicamentos")))
  let novaLista;


  const [filtrado, setFiltro] = useState(listaMedicamentos);

  const [termo, setTermo] = useState("");

  function apagaMedicamento(id) {
    novaLista = listaAnterior.filter((item) => {
      if (item.id !== id) {
        return item;
      } else {
        return false;
      }
    });
    localStorage.setItem("ListaMedicamentos", JSON.stringify(novaLista));
    setListaAnterior(novaLista)
    alert(`Excluido com sucesso.`)
  }

 
  useEffect(() => {
   
    setFiltro(
      listaMedicamentos.filter((item) => {
        if (
          item.medicamento
            .toLocaleLowerCase()
            .indexOf(termo.toLocaleLowerCase()) !== -1
        ) {
          return item;
        } else {
          return false;
        }
      })
    );
  }, [termo, listaAnterior]);

  return (
    <>
      <HeaderNav />
      <div className="container">
        <div className="row g-3 ps-4 pe-4 pt-5">
          <div className="col-lg-5 col-md-12 mt-5">
            <h4 className="pt-4 mb-0 mt-2">Lista de Medicamentos</h4>
            <input
              className="form-control mt-3"
              aria-describedby="inputGroup-sizing-sm"
              value={termo}
              onChange={(e) => setTermo(e.target.value)}
              placeholder="Pesquise o nome do medicamento"
            ></input>
          </div>
          <div className="row g-3 mb-5">
            {filtrado.map((item) => {
              return (
                <CardMedicamento
                  excluir={apagaMedicamento}
                  key={item.id}
                  descricao={item.descricao}
                  medicamento={item.medicamento}
                  dosagem={item.dosagem}
                  preco={item.preco}
                  tipo={item.tipo}
                  laboratorio={item.laboratorio}
                  id={item.id}
                />
              );
            })}
            {filtrado.length === 0 ? <div>Não encontrado.</div>: null}
          </div>
        </div>
      </div>
    </>
  );
}
