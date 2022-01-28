function Type({ t }) {
  let bgColor = ''
  switch (t) {
    case 'normal':
      bgColor = '#A7A777'
      break
    case 'fighting':
      bgColor = '#C23328'
      break
    case 'flying':
      bgColor = '#A78FEE'
      break
    case 'poison':
      bgColor = '#9F409F'
      break
    case 'ground':
      bgColor = '#DFBF68'
      break
    case 'rock':
      bgColor = '#B8A038'
      break
    case 'bug':
      bgColor = '#A8B820'
      break
    case 'ghost':
      bgColor = '#705897'
      break
    case 'fire':
      bgColor = '#F08030'
      break
    case 'water':
      bgColor = '#6890EE'
      break
    case 'grass':
      bgColor = '#78C351'
      break
    case 'electric':
      bgColor = '#F7CF30'
      break
    case 'psychic':
      bgColor = '#F65887'
      break
    case 'ice':
      bgColor = '#98D8D8'
      break
    case 'dragon':
      bgColor = '#6F38F7'
      break
    default:
      bgColor = 'black'
  }

  console.log(bgColor)

  return (
    <div style={{ backgroundColor: bgColor }} className='type'>
      {t.toUpperCase()}
    </div>
  )
}

export default Type
