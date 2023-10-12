import CharacterItem from '../character-item/CharacterItem.component'

const FavoritedCharacters = () => {

  // get key from favoritedCharacters from localStorage, if it doesn't exist, set it to an empty array
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
      {favoritedCharacters.size > 0 ? favoritedCharacters : <p>No favorited characters...</p>}
    </div>
  )
}

export default FavoritedCharacters
