import { FormEvent, useContext, useEffect, useState } from "react";
import { CharacterContext } from "../../contexts/character-context/CharacterContext";
import ICharacterContext from "../../interfaces/character/ICharacterContext";
import CharacterItem from "../character-item/CharacterItem.component";
import ICharacter from "../../interfaces/character/ICharacter";

const CharacterList = () => {

  const [search, setSearch] = useState<ICharacter[]>([]);
  const {characters, getCharacters} = useContext(CharacterContext) as ICharacterContext

  useEffect (() => {
    getCharacters();
  }, [getCharacters])


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault()

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value || e.target.value === '') {
      setSearch(characters)
      } else {
      const resultsArray = 
        characters.filter(char => char.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setSearch(resultsArray)
    }
  }

  const searchResults = search.map((char: ICharacter, i: number) => (
    <CharacterItem
      key={`character-${i}`}
      id={char.id}
      name={char.name}
      gender={char.gender}
      status={char.status}
      image={char.image}
    />
  ))

  const charactersLoaded = characters.map((char: ICharacter, i: number) => (
    <CharacterItem
      key={`character-${i}`}
      id={char.id}
      name={char.name}
      gender={char.gender}
      status={char.status}
      image={char.image}
    />
  ))

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleSearchChange}/>
        <button>Search</button>
      </form>
      <section className="row gy-4">
        {searchResults.length > 0
          ? searchResults
          : charactersLoaded}
      </section>
    </div>
  )
}

  export default CharacterList;
