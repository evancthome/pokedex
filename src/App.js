import './reset.css'
import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Entries from './components/Entries'

function App() {
  const [allPokemon, setPokemon] = useState([])
  const [q, setQ] = useState('')

  useEffect(() => {
    const getAllPokemon = async () => {
      const pokemonFromServer = await fetchAllPokemon()
      setPokemon(pokemonFromServer.results)
    }
    getAllPokemon()
  }, [])

  //Bind state to input query
  const onChange = (e) => {
    setQ(e.target.value)
  }

  //Fetch all pokemon to display
  const fetchAllPokemon = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    const data = await res.json()

    return data
  }

  return (
    <div className='App'>
      <Header />
      <div className='container search'>
        <form>
          <input
            value={q}
            onChange={onChange}
            className='input-search'
            type='text'
            placeholder='Search'
          />
        </form>
      </div>
      <div className='container pokemon-entries'>
        <Entries query={q} allPokemon={allPokemon} />
      </div>
    </div>
  )
}

export default App
