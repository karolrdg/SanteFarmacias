import { useEffect, useState } from "react";
import { useDadosFarmacia } from "../contexts/useDadosFarmacia";
import HeaderNav from "../components/HeaderNav";
import CadastroFarmacia from "../components/CadastroFarmacia";
export default function CadastroPharm() {
  const { dadosCep, setDadosCep, latLng, setLatLng } = useDadosFarmacia();

  const [respostaCep, setRespostaCep] = useState({
    logradouro: "",
    localidade: "",
    uf: "",
    bairro: "",
  });

  useEffect(() => {
    if (dadosCep.length === 8) {
      fetch(`https://viacep.com.br/ws/${dadosCep}/json/`, { method: "GET" })
        .then((respostaInicial) => {
          return respostaInicial.json();
        })
        .then((infoDoCEP) => {
          setRespostaCep({
            logradouro: infoDoCEP.logradouro,
            localidade: infoDoCEP.localidade,
            uf: infoDoCEP.uf,
            bairro: infoDoCEP.bairro,
          });
          if (infoDoCEP.erro) {
            alert(
              `Aviso: Para realizar o preenchimento automático dos dados de endereço com base no CEP fornecido, é necessário verificar se o campo "CEP" está correto e contém 8 dígitos numéricos.`
            );
            setRespostaCep({
              logradouro: "",
              localidade: "",
              uf: "",
              bairro: "",
            });
          }
        });
    }
  }, [dadosCep]);

  useEffect(() => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${respostaCep.logradouro},${respostaCep.localidade},${respostaCep.bairro},${respostaCep.uf}&components=country:BR&key=`,
      { method: "GET" }
    )
      .then((respostaInicial) => {
        return respostaInicial.json();
      })
      .then((geocode) => {
        if (respostaCep.localidade !== "") {
          setLatLng({
            latitude: geocode.results[0].geometry.location.lat,
            longitude: geocode.results[0].geometry.location.lng,
          });
        } else {
          setLatLng({
            latitude: "",
            longitude: "",
          });
        }
        setDadosCep("");
      });
  }, [respostaCep]);

  return (
    <>
      <HeaderNav />
      <CadastroFarmacia
        logradouro={respostaCep.logradouro}
        localidade={respostaCep.localidade}
        bairro={respostaCep.bairro}
        uf={respostaCep.uf}
        lat={latLng.latitude}
        lng={latLng.longitude}
      />
    </>
  );
}
