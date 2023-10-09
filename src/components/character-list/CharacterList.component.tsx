import { useContext } from "react";
import { CharacterContext } from "../../contexts/character-context/CharacterContext";
import ICharacterContext from "../../interfaces/character/ICharacterContext";
import CharacterItem from "../character-item/CharacterItem.component";

const CharacterList = () => {

  const {characters} = useContext(CharacterContext) as ICharacterContext

  const getCharacterItems = () => {
    return characters.map((char, i) => (
      <CharacterItem
        key={`character-${i}`}
        id={char.id}
        name={char.name}
        gender={char.gender}
        status={char.status}
        image={char.image}
      />
    ))
  }

  return (
    <section>{getCharacterItems()}</section>
  )
}

export default CharacterList;