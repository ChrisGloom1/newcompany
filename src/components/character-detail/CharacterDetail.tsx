
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ICharacter from '../../interfaces/character/ICharacter'
import ICharacterContext from '../../interfaces/character/ICharacterContext'
import { CharacterContext } from '../../contexts/character-context/CharacterContext'


const CharacterDetail = () => {

  const { id } = useParams<{id: string}>()
  const [item, setItem] = useState<ICharacter | null>(null)
  const {characters} = useContext(CharacterContext) as ICharacterContext

  useEffect(() => {
    if (id) {
      getCharacterById({ id: parseInt(id) })
    }
  }, [])

  const getCharacterById = ({ id }: { id: number }) => {
    const character = characters.find(char => char.id === id)
    if (character) {
      setItem(character);
    }
  }

  return (
    <div>
      <h1>Item Detail View</h1>
      {item ? (
        <div>
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>Gender: {item.gender}</p>
          <p>DoA: {item.status}</p>
          <p>ID: {item.id}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CharacterDetail
