import { ReactNode, createContext, useState, useEffect } from "react"
import ICharacter from "../../interfaces/character/ICharacter"
import ApiService from "../../services/ApiService"
import ICharacterContext from "../../interfaces/character/ICharacterContext"

export const CharacterContext = createContext<ICharacterContext | null>(null)

type Props = {
  children: ReactNode
}

const CharacterProvider = ({children}: Props) => {

  const [characters, setCharacters] = useState<ICharacter[]>([])

  useEffect (()=>{
    getCharacters();
  },[]);

  const getCharacters = async () => {
    const characters = await ApiService.getAll()
    console.log(characters.results)
    setCharacters(characters.results)
  }

  return (
    <CharacterContext.Provider value={{characters, getCharacters}}>
      {children}
    </CharacterContext.Provider>
  )

}

export default CharacterProvider