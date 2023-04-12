import { createContext, useContext, useState } from "react";
const DadosFarmaciaContext = createContext();
const DadosFarmaciaProvider = ({ children }) => {
  
  const [cepInformado, setCepInformado] = useState("");
  const [latLng, setLatLng] = useState({
    latitude: "",
    longitude: "",
  });
  
  return (
    <DadosFarmaciaContext.Provider
      value={{
        cepInformado,
        setCepInformado,
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
