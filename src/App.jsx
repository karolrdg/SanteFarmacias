import RotaPublica from "./routes/RotaPublica.jsx";
import {DadosFarmaciaProvider} from './contexts/useDadosFarmacia'

export default function App(){
  return (
    <DadosFarmaciaProvider>
    <RotaPublica />
    </DadosFarmaciaProvider>
  );
}

