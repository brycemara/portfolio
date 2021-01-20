import './Projects.css'

function Projects() {
  return(
    <section className="projects">
      <h1 className="projects-title">Projects</h1>
      <section className="project-divs">
        <div className="project-card">
          <h1>Taco Bout It</h1>
          <p>Taco Bout It was a solo project I worked on in Mod 3 of Turing, I had just been working with React for a little over a month at this point.</p>
          <a href="https://github.com/brycemara/taco-bout-it">REPO</a>
          <br></br>
          <a href="https://brycemara.github.io/taco-bout-it/">LIVE</a>

        </div>
        <div className="project-card">
          <h1>Game Sleuth</h1>
          <p>Game Sleuth was a group project I worked on in Mod 3 of Turing, the team was tasked with using a stretch technology. We chose typescript.</p>
          <a href="https://github.com/mdflynn/game-sleuth">REPO</a>
          <br></br>
          <a href="https://mdflynn.github.io/game-sleuth/">LIVE</a>

        </div>
        <div className="project-card">
          <h1>Overlook</h1>
          <p>Overlook was my last project in Vanilla JS. If you want to see my code without using a framework, here's your chance!</p>
          <a href="https://github.com/brycemara/overlook">REPO</a>
          <br></br>
          <a href="https://brycemara.github.io/overlook/">LIVE</a>

        </div>
      </section>
    </section>
  )
}

export default Projects;