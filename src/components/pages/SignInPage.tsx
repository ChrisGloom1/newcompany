import Register from "../register/Register"
import Login from "../login/Login"

const SignInPage = () => {
  return (
    <section className="mt-5">
      <h2 className="mb-4">Sign in or register</h2>
        <div className="d-flex justify-content-around">
          <Login />
          <Register />
        </div>
  </section>
  )
}

export default SignInPage