import './Nav.css'
import { Link } from 'react-router-dom';

function Nav() {
return(
  <section className="nav-bar">
    <Link to="/" className="remove-link">
      <h1 className="name-title">BRYCE MARA JARRETT</h1>
    </Link>
  </section>
)
}

export default Nav;