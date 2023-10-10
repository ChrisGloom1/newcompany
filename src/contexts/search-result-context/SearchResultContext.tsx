import { createContext, useState } from "react";
import ICharacterContext from "../../interfaces/character/ICharacterContext";
import ICharacter from "../../interfaces/character/ICharacter";



export const SearchResultsContext = createContext<ICharacterContext | null>(null)


const SearchResultsProvider = () => {

  const [searchResults, setSearchResults] = useState<ICharacter[]>([])

  return (
    <div>
      
    </div>
  )
}