import { useEffect, useState } from "react";
import { useDadosFarmacia } from "../contexts/useDadosFarmacia";
import HeaderNav from "../components/HeaderNav";
import CadastroFarmacia from "../components/CadastroFarmacia";
export default function CadastroPharm() {
  const { cepInformado, setCepInformado, latLng, setLatLng } =
    useDadosFarmacia();

  const [respostaCep, setRespostaCep] = useState({
    logradouro: "",
    localidade: "",
    uf: "",
    bairro: "",
  });

}
