import ICharacter from "./ICharacter"

interface IFavoriteCharactersContext {
  favoriteCharacters: ICharacter[]
  setFavoriteCharacters: (characters: ICharacter[]) => void
  toggleFavorite: (character: ICharacter) => void

}

export default IFavoriteCharactersContext