
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ICharacter from '../../interfaces/character/ICharacter'
import ICharacterContext from '../../interfaces/character/ICharacterContext'
import { CharacterContext } from '../../contexts/character-context/CharacterContext'
import CharacterItem from '../character-item/CharacterItem.component'


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
    <article className="col-sm-6 col-md-4 col-lg-3 mt-4">
    <article className="card">
      <div className="card-img-top">
        <img className="card-img-top" src={item.image} alt="" />
      </div>
      <div className="card-body">
        <h5 className="mb-4">{item.name}</h5>
        <p className="mb-2">Status: {item.status}</p>
        <p className="mb-2">Gender: {item.gender}</p>
        <p className="mb-2">Id: {item.id}</p>
        <div className="d-flex flex-row justify-content-between">
        </div>
      </div>
    </article>
  </article>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CharacterDetail
