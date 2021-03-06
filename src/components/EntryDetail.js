import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from './Header'
import Type from './Type'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function EntryDetail() {
  const [pokemonData, setData] = useState({})
  const { name } = useParams()

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await res.json()
      setData(data)
    }
    dataFetch()
  }, [name])

  return (
    <div className='entry-detail'>
      <Header />
      <div className='detail'>
        <Link className='btn' to='/'>
          Back
        </Link>

        {pokemonData.id ? (
          <div className='entry-card'>
            <div className='upper-data'>
              <p>Height: {pokemonData.height / 10} m</p>
              <h1>{name[0].toUpperCase() + name.slice(1)}</h1>
              <p>Weight: {pokemonData.weight / 10} kg</p>
            </div>

            <img
              src={require(`../pokemonsprites/${pokemonData.id}.png`)}
              alt={name}
            />
            <div className='types'>
              {pokemonData.types.map((t) => (
                <Type key={t.type.name} t={t.type.name} />
              ))}
            </div>
            <h2>Stats:</h2>
            <div className='stats'>
              {pokemonData.stats.map((s) => (
                <div key={s.stat.name} className='stat'>
                  <h3>{s.stat.name[0].toUpperCase() + s.stat.name.slice(1)}</h3>
                  <CircularProgressbar
                    value={s.base_stat}
                    maxValue={255}
                    text={s.base_stat}
                    styles={buildStyles({
                      pathColor: '#bd1a14',
                      textColor: '#222',
                    })}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          'Loading'
        )}
      </div>
    </div>
  )
}

export default EntryDetail
