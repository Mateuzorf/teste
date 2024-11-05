import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Renderiza o componente App dentro do elemento com id 'root' no index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);