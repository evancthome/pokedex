import { Link } from 'react-router-dom'

function Entry({ i, pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.name}`} className='pokemon-entry'>
      <h3>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3>
      <img src={require(`../pokemonsprites/${i + 1}.png`)} alt={pokemon.name} />
    </Link>
  )
}

export default Entry
