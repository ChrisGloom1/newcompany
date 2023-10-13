import ICharacter from "../../interfaces/character/ICharacter";
import CharacterItem from "../character-item/CharacterItem.component";
import { useFavoriteCharacters } from "../../contexts/favorite-characters-context/FavoriteCharactersContext";
import { useEffect } from "react";

const FavoriteCharactersPage = () => {
  const { favoriteCharacters,setFavoriteCharacters } = useFavoriteCharacters();

  useEffect(() => {
    const storedCharacters = JSON.parse(localStorage.getItem("favoritedCharacters") || "");
    setFavoriteCharacters(storedCharacters);
  }, [favoriteCharacters]);

  return (
    <section className="mt-5">
      <h2 className="mb-4">Your favorite characters</h2>
      <div className="row gy-4">
        {favoriteCharacters.length !== 0 ? (
          favoriteCharacters.map((char: ICharacter) => (
            <CharacterItem
              key={`character-${char.id}`}
              id={char.id}
              name={char.name}
              image={char.image}
              status={char.status}
              gender={char.gender}
            />
          ))
        ) : (
          <p>No favorited characters</p>
        )}
      </div>
    </section>
  );
};

export default FavoriteCharactersPage;