import Entry from './Entry'

function Entries({ allPokemon, query }) {
  return (
    <>
      {allPokemon
        .filter((pokemon) => {
          if (pokemon === '') {
            return pokemon
          } else if (pokemon.name.toLowerCase().includes(query.toLowerCase())) {
            return pokemon
          }
          return null
        })
        .map((pokemon, i) => (
          <Entry key={(i + 1).toString()} pokemon={pokemon} i={i + 1} />
        ))}
    </>
  )
}

export default Entries
