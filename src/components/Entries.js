import Entry from './Entry'

function Entries({ allPokemon }) {
  return (
    <>
      {allPokemon.map((pokemon, i) => (
        <Entry key={i.toString()} pokemon={pokemon} i={i} />
      ))}
    </>
  )
}

export default Entries
