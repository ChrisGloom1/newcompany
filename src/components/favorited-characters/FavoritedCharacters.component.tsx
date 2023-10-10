import React from 'react'
import CharacterList from '../character-list/CharacterList.component'
import CharacterItem from '../character-item/CharacterItem.component'

const FavoritedCharacters = () => {

  const favoritedCharactersFromLocalStorage = JSON.parse(localStorage.getItem('favoritedCharacters') || '[]')

  const favoritedCharacters = favoritedCharactersFromLocalStorage.map((char: { id: number; name: string; gender: string; status: string; image: string }) => (
      <CharacterItem
      key={`character-${char.id}`}
      id={char.id}
      name={char.name}
      gender={char.gender}
      status={char.status}
      image={char.image}
    />
  ))
  

  return (
    <div>
      {favoritedCharacters.size > 0 ? favoritedCharacters : <p>No favorited characters</p>}
    </div>
  )
}

export default FavoritedCharacters
