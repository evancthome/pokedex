import { Link } from 'react-router-dom'

function Entry({ pokemon, i }) {
  const url = pokemon.url
    .split('https://pokeapi.co/api/v2/pokemon')
    .pop()
    .split('/')[1]

  return (
    <Link to={`/pokemon/${pokemon.name}`} className='pokemon-entry'>
      <h3>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3>
      <img src={require(`../pokemonsprites/${url}.png`)} alt={pokemon.name} />
    </Link>
  )
}

export default Entry
