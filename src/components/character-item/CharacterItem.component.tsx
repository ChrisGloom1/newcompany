import { FC, useEffect, useState } from "react";
import ICharacter from "../../interfaces/character/ICharacter";
import { Link } from "react-router-dom";
import { useFavoriteCharacters } from "../../contexts/favorite-characters-context/FavoriteCharactersContext";

const CharacterItem: FC<ICharacter> = ({ id, name, image, gender, status }) => {
  const { favoriteCharacters } = useFavoriteCharacters();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    const favoritedCharacters = JSON.parse(localStorage.getItem("favoritedCharacters") || "");
    const updatedCharacters = isFavorite
      ? favoritedCharacters.filter((char: { id: number }) => char.id !== id)
      : [...favoritedCharacters, { id, name, image, gender, status }];
    localStorage.setItem("favoritedCharacters", JSON.stringify(updatedCharacters));
  };

  useEffect(() => {
    const favoritedCharacters = JSON.parse(localStorage.getItem("favoritedCharacters") || "");
    const isCharacterFavorited = favoritedCharacters.some((char: { id: number }) => char.id === id);
    setIsFavorite(isCharacterFavorited);
  }, []);

  return (
    <article className="col-sm-6 col-md-4 col-lg-3 mt-4">
      <article className="card">
        <div className="card-img-top">
          <img className="card-img-top" src={image} alt="" />
        </div>
        <div className="card-body">
          <h5 className="mb-4">{name}</h5>
          <div className="d-flex flex-row justify-content-between">
            <Link to={`/detail/${id}`}>
              <button className="btn btn-primary p2">Se mer!</button>
            </Link>
            <button onClick={handleToggleFavorite} className="btn btn-info p2">
              {isFavorite ? "🩷" : "🤍"}
            </button>
          </div>
        </div>
      </article>
    </article>
  );
};

export default CharacterItem;