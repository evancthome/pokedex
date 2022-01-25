import pokeball from '../pokeball.svg'

function Header() {
  return (
    <header>
      <div className='container'>
        <h2>Gotta catch 'em all!</h2>
        <div className='brand'>
          <img className='logo' src={pokeball} alt='pokeball' />
          <h1>Pokedex</h1>
        </div>
      </div>
    </header>
  )
}

export default Header
