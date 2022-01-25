function Entry({ i, pokemon }) {
  return (
    <div className='pokemon-entry'>
      <h3>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3>
      <img src={require(`../pokemonsprites/${i + 1}.png`)} alt={pokemon.name} />
    </div>
  )
}

export default Entry
