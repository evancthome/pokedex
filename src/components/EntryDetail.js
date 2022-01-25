import { useParams, Link } from 'react-router-dom'

function EntryDetail() {
  const { name } = useParams()

  return (
    <>
      <h1>{name}</h1>
      <Link to='/'>Back</Link>
    </>
  )
}

export default EntryDetail
