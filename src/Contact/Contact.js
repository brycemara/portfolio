import './Contact.css'

function Contact() {
  return(
    <section >
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-me">
        <a target="blank" href="https://www.linkedin.com/in/bryce-jarrett-496496171/"><img alt="linkedin"  src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=1C5D99"/></a>
        <a target="blank"href="https://github.com/brycemara"><img alt="github" src="https://img.shields.io/badge/-Github-b1361e.svg?style=for-the-badge&logo=github&colorB=black" /></a>
        <a target="blank" href="mailto:brycej98@gmail.com"><img alt="email" src="https://img.shields.io/badge/-Email-f2c236.svg?style=for-the-badge&colorB=0078D4" /></a>
      </div>
    </section>
  )
}

export default Contact;