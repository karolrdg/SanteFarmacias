import ReactDOM from 'react-dom/client';
import './style.global.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LoginProvider>
    <App />
    </LoginProvider>
);

