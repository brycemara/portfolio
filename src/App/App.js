import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'

function App() {
  return(
    <main>
      <Nav />
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} />
      </Switch>
    </main>
  )
}

export default App;