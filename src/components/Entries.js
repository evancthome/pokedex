import Entry from './Entry'

function Entries({ allPokemon }) {
  return (
    <>
      {allPokemon.map((pokemon, i) => (
        <Entry key={(i + 1).toString()} pokemon={pokemon} i={i + 1} />
      ))}
    </>
  )
}

export default Entries
