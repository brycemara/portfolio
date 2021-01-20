import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'

function App() {
  return(
    <main>
      <Nav />
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </main>
  )
}

export default App;