import CharacterList from "../character-list/CharacterList.component";

const HomePage = () => {

  return (
    <section className="mt-5">
      <h3 className="mb-4">20 first characters in Rick & Morty</h3>
      <CharacterList/>
    </section>
  )
}

export default HomePage;