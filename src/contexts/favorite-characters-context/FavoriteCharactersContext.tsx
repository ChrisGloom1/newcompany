// FavoriteCharactersContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import IFavoriteCharactersContext from '../../interfaces/character/IFavoriteCharactersContext';
import ICharacter from '../../interfaces/character/ICharacter';


const FavoriteCharactersContext = createContext<IFavoriteCharactersContext | undefined>(undefined);

interface FavoriteCharactersProviderProps {
  children: ReactNode;
}

const FavoriteCharactersProvider = ({ children }: FavoriteCharactersProviderProps) => {
  const [favoriteCharacters, setFavoriteCharacters] = useState<ICharacter[]>([]);

  const toggleFavorite = (character: ICharacter) => {
    setFavoriteCharacters((prevFavorites) => {
      if (prevFavorites.some((char) => char.id === character.id)) {
        return prevFavorites.filter((char) => char.id !== character.id);
      } else {
        return [...prevFavorites, character];
      }
    });
  };

  return (
    <FavoriteCharactersContext.Provider value={{ favoriteCharacters, toggleFavorite, setFavoriteCharacters }}>
      {children}
    </FavoriteCharactersContext.Provider>
  );
};

export const useFavoriteCharacters = () => {
  const context = useContext(FavoriteCharactersContext);
  if (!context) {
    throw new Error('useFavoriteCharacters must be used within a FavoriteCharactersProvider');
  }
  return context;
};

export default FavoriteCharactersProvider;