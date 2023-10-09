import ICharacter from "./ICharacter";

interface ICharacterContext {
  characters: ICharacter[];
  getCharacters: () => Promise<void>;
}

export default ICharacterContext; 