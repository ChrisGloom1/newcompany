import { useRef, useState, useEffect } from "react"
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])(?=.{8,24})/

const Register = () => {

  const userRef = useRef<HTMLInputElement>(null)
  const errorRef = useRef<HTMLInputElement>(null)

  const [user, setUser] = useState<string>("")
  const [validName, setValidName] = useState<boolean>(false)
  const [userFocus, setUserFocus] = useState<boolean>(false)

  const [password, setPassword] = useState<string>("")
  const [validPassword, setValidPassword] = useState<boolean>(false)
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false)

  const [matchPassword, setMatchPassword] = useState<string>("")
  const [validMatch, setValidMatch] = useState<boolean>(false)
  const [matchPasswordFocus, setMatchPasswordFocus] = useState<boolean>(false)

  const [errorMessage, setErrorMessage] = useState<string>("")
  const [success, setSuccess] = useState<boolean>(false)

  // runs when page renders
  useEffect(() => {
      userRef.current?.focus()
  }, [])

  // will run when user changes - listed in the dependency array
  useEffect(() => {
    const result = USER_REGEX.test(user)
    console.log(result)
    console.log(user)
    setValidName(result)
  }, [user])

  // will run when password or matchPassword change - listed in the dependency array
  useEffect(() => {
    const result = PASSWORD_REGEX.test(password)
    console.log(result)
    console.log(password)
    setValidPassword(result)
    const match = password === matchPassword
    setValidMatch(match)
  }, [password, matchPassword])

  // will run when user, password or matchPassword change - listed in the dependency array
  useEffect(() => {
    // clearing the error message if user updates the states listed in the dependency array 
    // if there has been shown an error message to the user
    setErrorMessage("")
  }, [user, password, matchPassword])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // if the button is enabled with JS hack
    const v1 = USER_REGEX.test(user)
    const v2 = PASSWORD_REGEX.test(password)
    if (!v1 || !v2) {
      setErrorMessage("Invalid entry")
      return
    }
    console.log(user, password)
    setUser("")
    setPassword("")
    setMatchPassword("")
    setSuccess(true)
  }

  return (
    <>
    {success  ? (
      <section className="registrationContainer">
        <h4>Success!</h4>
        <p>
          Please sign in on the left.
        </p>
      </section>
    ) : (
      <section className="registrationContainer">
        <p ref={errorRef} className={errorMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{errorMessage}</p>
        <h4>Register</h4>

        <form onSubmit={handleSubmit}>

          <label htmlFor="username">
            Username:
            <span className={validName ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validName || !user ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input 
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidNote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <p id="uidNote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters. <br />
            Must begin with a letter. <br />
            Letters, numbers, or these symbols: !@#$%
          </p>

          <label htmlFor="password">
            Password:
            <span className={validPassword ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validPassword || !password ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input 
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            aria-invalid={validPassword ? "false" : "true"}
            aria-describedby="passwordNote"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
          <p id="passwordNote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters. <br />
            Must include uppercase and lowercase letter, a number, a special character.
            Allowed special characters:
            <span aria-label="exclamation mark">!</span>
            <span aria-label="at symbol">@</span>
            <span aria-label="hashtag">#</span>
            <span aria-label="dollar sign">$</span>
          </p>

          <label htmlFor="confirmPassword">
            Confirm Password:
            <span className={validMatch && matchPassword ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validMatch || !matchPassword ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </label>
          <input 
            type="password"
            id="confirmPassword"
            onChange={(e) => setMatchPassword(e.target.value)}
            value={matchPassword}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmNote"
            onFocus={() => setMatchPasswordFocus(true)}
            onBlur={() => setMatchPasswordFocus(false)}
          />
          <p id="confirmNote" className={matchPasswordFocus && !validMatch ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Must match the first apssword input field.
          </p>
          
          <button className="btn btn-primary registerButton" disabled={!validName || !validPassword || !validMatch ? true : false}>
            Sign Up
          </button>

        </form>

      </section>
      )}
    </>
  )
}

export default Register