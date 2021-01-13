import './Nav.css'
import { Link } from 'react-router-dom';

function Nav() {
return(
  <section className="nav-bar">
    <Link to="/">
      <button>Home</button>
    </Link>
    <Link to="/projects">
      <button>Projects</button>
    </Link>
  </section>
)
}

export default Nav;