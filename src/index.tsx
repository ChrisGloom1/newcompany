import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CharacterProvider from './contexts/character-context/CharacterContext';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FavoriteCharactersProvider from './contexts/favorite-characters-context/FavoriteCharactersContext';
import { AuthProvider } from './contexts/auth-context/AuthProvider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <CharacterProvider>
        <FavoriteCharactersProvider>
          <App />
        </FavoriteCharactersProvider>
      </CharacterProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
