import { useRef, useState, useEffect, useContext } from "react"
import AuthContext from "../../contexts/auth-context/AuthProvider"

const Login = () => {

  // const { setAuth } = useContext(AuthContext)

  const userRef = useRef<HTMLInputElement>(null)
  const errorRef = useRef<HTMLInputElement>(null)

  const [user, setUser] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [success, setSuccess] = useState<boolean>(false)

  useEffect(() => {
    userRef.current?.focus()
  }, [])

  useEffect(() => {
    setErrorMessage("")
  }, [user, password])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(user, password)
    setUser("")
    setPassword("")
    setSuccess(true)
  }

  return (
    <>
      {success ? (
        <section className="registrationContainer">
          <h4>Success!</h4>
          <p>You are now logged in.</p>
        </section>
      ) : (
      <section className="registrationContainer">
        <p ref={errorRef} className={errorMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{errorMessage}</p>
        <h4>Log In</h4>
        <form onSubmit={handleSubmit}>

          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />

          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />

          <button className="btn btn-primary registerButton">Log In</button>

        </form>
      </section>
      )}
    </>
  )
}

export default Login