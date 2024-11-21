import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'; // Importa le icone necessarie

// Aggiungi le icone alla libreria globale
library.add(faPlus, faTrash);

createRoot(document.getElementById('root')).render(
  <App />
);
