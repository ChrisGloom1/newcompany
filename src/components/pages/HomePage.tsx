import { useContext, useState } from "react";
import CharacterList from "../character-list/CharacterList.component";
import ICharacter from "../../interfaces/character/ICharacter";
import ICharacterContext from "../../interfaces/character/ICharacterContext";
import { CharacterContext } from "../../contexts/character-context/CharacterContext";

const HomePage = () => {

  const {characters} = useContext(CharacterContext) as ICharacterContext
  const [searchResults, setSearchResults] = useState<ICharacter[]>([])

  return (
    <section className="mt-5">
      <h3 className="mb-4">20 first characters in Rick & Morty</h3>
      <CharacterList/>
    </section>
  )
}

export default HomePage;