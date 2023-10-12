import { FC, useEffect, useState } from "react";
import ICharacter from "../../interfaces/character/ICharacter";
import { Link } from "react-router-dom";

const CharacterItem: FC<ICharacter> = ({ id, name, image, gender, status }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    const favoritedCharacters = JSON.parse(localStorage.getItem("favoritedCharacters") || "");
    // if char is favorite, filter the array and remove the char with the corresponding id
    // if char is not favorite, spread the array and add the chars params to the array
    const updatedCharacters = isFavorite
      ? favoritedCharacters.filter((char: { id: number }) => char.id !== id)
      : [...favoritedCharacters, { id, name, image, gender, status }];

      // set the updated array to local storage value for favoritedCharacters
    localStorage.setItem("favoritedCharacters", JSON.stringify(updatedCharacters));
  };

  useEffect(() => {
    // get the favoritedCharacters from local storage
    const favoritedCharacters = JSON.parse(localStorage.getItem("favoritedCharacters") || "");
    // check if the current character is in the array of favorited characters
    // some() returns true if at least one element in the array passes the test. If truthie, set isFavorite to true
    const isCharacterFavorited: boolean = favoritedCharacters.some((char: { id: number }) => char.id === id);
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
              <button className="btn btn-primary p2">See more</button>
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