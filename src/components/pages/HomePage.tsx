import CharacterList from "../character-list/CharacterList.component";

const HomePage = () => {

  return (
    <section className="mt-5">
      <h2 className="mb-4">Rick & Morty characters</h2>
      <CharacterList/>
    </section>
  )
}

export default HomePage;