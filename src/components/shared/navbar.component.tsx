import { Link } from "react-router-dom";

const Navbar = () => {
  return(
    <header>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">NewCompany</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/FavoritedCharactersPage" className="nav-link">Favorites</Link>
              </li>
              <li className="nav-item">
                <Link to="/SignInPage" className="nav-link">Log In</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;