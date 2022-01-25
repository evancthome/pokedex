import './reset.css'
import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Entries from './components/Entries'

function App() {
  const [allPokemon, setPokemon] = useState([])

  useEffect(() => {
    const getAllPokemon = async () => {
      const pokemonFromServer = await fetchAllPokemon()
      setPokemon(pokemonFromServer.results)
    }
    getAllPokemon()
  }, [])

  const fetchAllPokemon = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    const data = await res.json()

    return data
  }

  return (
    <div className='App'>
      <Header />
      <div className='container search'>
        <Search />
      </div>
      <div className='container pokemon-entries'>
        <Entries allPokemon={allPokemon} />
      </div>
    </div>
  )
}

export default App
