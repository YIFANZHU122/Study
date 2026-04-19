import { useSearchParams } from 'react-router-dom'

function User() {
  const [searchParams] = useSearchParams()
  return (
      <h1>user --{searchParams.get('id')}</h1>
  )
}

export default User
