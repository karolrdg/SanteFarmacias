import { createContext, useContext, useState } from "react";
const DadosFarmaciaContext = createContext();
const DadosFarmaciaProvider = ({ children }) => {
  const [dadosCep, setDadosCep] = useState("");

  const [latLng, setLatLng] = useState({
    latitude: "",
    longitude: "",
  });
  return (
    <DadosFarmaciaContext.Provider
      value={{
        dadosCep,
        setDadosCep,
        latLng,
        setLatLng,
      }}
    >
      {children}
    </DadosFarmaciaContext.Provider>
  );
};
const useDadosFarmacia = () => {
  return useContext(DadosFarmaciaContext);
};
export { DadosFarmaciaProvider, useDadosFarmacia, DadosFarmaciaContext };
