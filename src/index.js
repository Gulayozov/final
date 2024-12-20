import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FavoritesProvider } from './context/FavoritesContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <FavoritesProvider>
            <App />
        </FavoritesProvider>
    </React.StrictMode>
);

reportWebVitals();
