import { Link } from 'react-router-dom'

export function Login() {
  return (
    <div>
      <h1>Login Module</h1>

      <Link to="bet">Bets</Link>
      <hr />
      <Link to="games">Games</Link>
    </div>
  )
}
