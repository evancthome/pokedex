import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function EntryDetail(props) {
  const [pokemonData, setData] = useState({})
  const { name } = useParams()

  // const fetchPokemonData = useCallback(async () => {
  //   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  //   const data = await res.json()

  //   return data
  // }, [id])

  // useEffect(() => {
  //   const getPokemonData = async () => {
  //     const pokemonDataFromServer = await fetchPokemonData()
  //     setData(pokemonDataFromServer)
  //   }
  //   getPokemonData()
  // }, [fetchPokemonData])

  useEffect(() => {
    console.log('useEffect called')
    const dataFetch = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await res.json()
      setData(data)
      console.log(data)
    }
    dataFetch()
  }, [name])

  console.log(pokemonData.id)

  return (
    <div className='detail'>
      <header>
        <h1>{name[0].toUpperCase() + name.slice(1)}</h1>
      </header>
      <Link className='btn' to='/'>
        Back
      </Link>

      {pokemonData.id ? (
        <>
          {pokemonData.types.map((t) => (
            <p key={t.type.name}>type: {t.type.name}</p>
          ))}
          {pokemonData.stats.map((s) => (
            <p key={s.stat.name}>
              {s.stat.name}: {s.base_stat}
            </p>
          ))}
          <p>height: {pokemonData.height / 10} m</p>
          <p>weight: {pokemonData.weight / 10} kg</p>
          <img
            src={require(`../pokemonsprites/${pokemonData.id}.png`)}
            alt={name}
          />
        </>
      ) : (
        'Loading'
      )}
    </div>
  )
}

export default EntryDetail
