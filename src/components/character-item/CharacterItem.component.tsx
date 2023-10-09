import { FC } from "react";
import ICharacter from "../../interfaces/character/ICharacter";

const CharacterItem: FC<ICharacter> = ({id, name, status, gender, image}) => {
  return (
    <article className="col-sm-6 col-md-4 col-lg-3 mt-4">
      <article className="card">
        <div className="card-img-top">
          <img className="card-img-top" src={image} alt="" />
        </div>
        <div className="card-body">
          <h5>{name}</h5>
          <p>Id: {id}</p>
          <p><em>{status}</em></p>
          <p><em>{gender}</em></p>
        </div>
      </article>
    </article>
  )
}

export default CharacterItem;
