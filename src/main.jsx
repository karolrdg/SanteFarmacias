import ReactDOM from 'react-dom/client';
import { LoginProvider } from './contexts/useLogin';
import './style.global.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LoginProvider>
    <App />
    </LoginProvider>
);

