import { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../../contexts/character-context/CharacterContext";
import ICharacterContext from "../../interfaces/character/ICharacterContext";
import CharacterItem from "../character-item/CharacterItem.component";
import ICharacter from "../../interfaces/character/ICharacter";

const CharacterList = () => {
  const [search, setSearch] = useState<string>("");
  const [sortOption, setSortOption] = useState("idAscending");
  const { characters, getCharacters } = useContext(CharacterContext) as ICharacterContext;

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearch(query);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    setSortOption(option);
  };

  const sortCharacters = (charactersToSort: ICharacter[], sortingOption: string) => {
    switch (sortingOption) {
      case "idAscending":
        // if a is less than b, return a negative number
        // if b is less than a, return a positive number
        // if a is equal to b, return 0
        
        // sort() sorts the array in place, so we need to spread the array to create a new array
        return [...charactersToSort].sort((a, b) => a.id - b.id);
      case "idDescending":
        return [...charactersToSort].sort((a, b) => b.id - a.id);
      case "nameAscending":
        return [...charactersToSort].sort((a, b) => a.name.localeCompare(b.name));
      case "nameDescending":
        return [...charactersToSort].sort((a, b) => b.name.localeCompare(a.name));
    }
    return charactersToSort;
  };

  const searchResults = characters.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedCharacters = sortCharacters(searchResults, sortOption);

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <form className="form-group">
            <label htmlFor="search">Search:</label>
            <input
              id="search"
              type="text"
              value={search}
              onChange={handleSearchChange}
              className="form-control mb-4"
              placeholder="Search for character..."
            />
          </form>
        </div>
        <div className="col-md-6">
          <form className="form-group">
            <label htmlFor="sort">Sort by:</label>
            <select
              id="sort"
              className="form-control mb-4"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="idAscending">Id (Ascending)</option>
              <option value="idDescending">Id (Descending)</option>
              <option value="nameAscending">Name (Ascending)</option>
              <option value="nameDescending">Name (Descending)</option>
            </select>
          </form>
        </div>
      </div>
      <section className="row gy-4">
        {sortedCharacters.length > 0 ? (
          sortedCharacters.map((char: ICharacter, i: number) => (
            <CharacterItem
              key={`character-${char.id}`}
              id={char.id}
              name={char.name}
              gender={char.gender}
              status={char.status}
              image={char.image}
            />
          ))
        ) : (
          <p>No characters available</p>
        )}
      </section>
    </>
  );
};

export default CharacterList;
