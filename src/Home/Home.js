import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return(
    <main className="container">
      <ul className="list-wrapper">
        <Link to="/projects" className="remove-link"> 
          <li className="projects">
            <h3 className="title">Projects</h3>
          </li>
        </Link>
        <Link to="/about" className="remove-link">
          <li className="about">
            <h3 className="title">About Me</h3>
          </li>
        </Link>
        <Link to="/contact" className="remove-link">
          <li className="contact">
            <h3 className="title">Contact Me</h3>
          </li>
        </Link>
        <li className="image">
        </li>
        <li className="image-2">
        </li>
      </ul>
    </main>
  )
}

export default Home;