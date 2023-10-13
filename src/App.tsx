import './App.css';
import Navbar from './components/shared/navbar.component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import CharacterDetail from './components/character-detail/CharacterDetail';
import FavoriteCharactersPage from './components/pages/FavoriteCharactersPage';
import SignInPage from './components/pages/SignInPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="container">
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path="/detail/:id" element={<CharacterDetail />} />
            <Route path="/FavoritedCharactersPage" element={<FavoriteCharactersPage />} />
            <Route path="/SignInPage" element={<SignInPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
