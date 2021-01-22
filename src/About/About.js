import "./About.css";
import munichImg from "../assets/munich.png";
import texasImg from "../assets/gruene-hall.JPG";
import abqImg from "../assets/sunset.png";
import parisImg from "../assets/paris.png";
import snowboardImg from "../assets/snowboard.JPG";
import snowImg from "../assets/snow.JPG";
import irelandImg from "../assets/ireland.JPG";
import bookImg from "../assets/book.png";
import techImg from "../assets/tech.JPG";

function About() {
  return (
    <section className="about-container">
      <h1 className="about-title">About Me</h1>
      <section className="about-me">
        <p>
          Industrial Engineer turn Software Developer, I have a passion for
          problem solving. If you want the technical "About Me", contact me for
          my Resume and Cover Letter. Here I would rather show you who I am
          outside of my work and education. And they say a picture is worth a
          thousand words.
        </p>
      </section>
      <h1 className="image-title">
        Some of my favorite places I've traveled to
      </h1>
      <div className="wrapper">
        <div class="media">
          <div class="layer">
            <p>+ Munich Germany</p>
            <br></br>
            <p>
              Munich reminds me of the Austin of Germany, young, fun and
              everyone is just riding their wave.{" "}
            </p>
          </div>
          <img src={munichImg} alt="not working" />
        </div>
        <div class="media">
          <div class="layer">
            <p>+ New Branfuls TX</p>
            <p>
              Ahh Texas. From floating the river to dancing at Gruene Hall this
              place is full of the most kind people in the world.
            </p>
          </div>
          <img src={texasImg} alt="not working" width="600" height="400" />
        </div>
        <div class="media">
          <div class="layer">
            <p>+ Cliffs of Moher Ireland</p>
            <p>
              Horcrux sighting!! The cliffs were surreal, although the bus ride
              there nearly killed me.
            </p>
          </div>
          <img src={irelandImg} alt="not working" width="500" height="900" />
        </div>
      </div>
      <h1 className="image-title">Places that are near and dear to me</h1>
      <div className="wrapper">
        <div class="media">
          <div class="layer">
            <p>+ Paris France</p>
            <p>
              I spent 6 weeks living in Paris on this street. I love the
              culture, the city, and how I grew from it. Not sure the french
              would say they love me though.
            </p>
          </div>
          <img src={parisImg} alt="not working" width="500" height="900" />
        </div>
        <div class="media">
          <div class="layer">
            <p>+ Telluride CO</p>
            <p>
              Many Summers, Christmases, Thanksgivings and vacations spent here
              enjoying this magical town and running around with my siblings and
              cousins.
            </p>
          </div>
          <img src={snowImg} alt="not working" width="500" height="900" />
        </div>
        <div class="media">
          <div class="layer">
            <p>+ Abq NM - Home</p>
            <p>
              NM has character, it wasn't until it was in my past that I fully
              appreciated getting to grow up here.
            </p>
          </div>
          <img src={abqImg} alt="not working" />
        </div>
      </div>
      <h1 className="image-title">Things I love to do</h1>
      <div className="wrapper">
        <div class="media">
          <div class="layer">
            <p>+ Read</p>
            <p>
              Send me your favorite books, ask me about mine. I'm never without
              a current read. And that's Jax, my little fur baby.
            </p>
          </div>
          <img src={bookImg} alt="not working" width="400" height="900" />
        </div>
        <div class="media">
          <div class="layer">
            <p>+ Snowboard</p>
            <p>
              My favorite past time.
            </p>
          </div>
          <img src={snowboardImg} alt="not working" width="500" height="900" />
        </div>
        <div class="media">
          <div class="layer">
            <p>+ Learn</p>
            <p>
              My gradudation from Texas Tech was only one of my many learning
              experiences. I read, travel, snowboard all because I want to learn
              something new every chance I get.
            </p>
          </div>
          <img src={techImg} alt="not working" width="400" height="900" />
        </div>
      </div>
    </section>
  );
}

export default About;
