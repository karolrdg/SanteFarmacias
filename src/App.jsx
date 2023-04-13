import Rotas from "./routes/Rotas.jsx";
import {DadosFarmaciaProvider} from './contexts/useDadosFarmacia'

export default function App(){
  return (
    <DadosFarmaciaProvider>
    <Rotas />
    </DadosFarmaciaProvider>
  );
}

