import React from 'react'
import PropTypes from 'prop-types'
//<span className="image main"><img src={pic01} alt="" /></span>
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Welcome!</h2>
          <p>I am a third year student studying in the Computer Programmer Analyst Program(T127) at George Brown College. The expected completion date of my studies will be April, 2019. I am currently looking for work opportunities and learning experiences relating to technology.</p>
          <h2>Philosophy/Statement of Career Goal</h2>
          <p>Technology is constantly growing so there is never a shortage of interesting things to learn. I thrive on making meaningful connections with people and producing a positive work experience with my skill set. The field of technology is vast and I am interested to see where it will take me. </p>
          {close}
        </article>

        <article id="resume" className={`${this.props.article === 'resume' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Hire Broke College Student</h2>
          <h3>Resume</h3>
          <p><a href='https://drive.google.com/open?id=1bsC9oMZ2WRFMahvRDqUhIBqAX-3teAs1'>Please view my resume here</a></p>
          <h3>Cover Letter</h3>
          <p><a href='https://drive.google.com/open?id=0ByxE1PYO2JbubkhQX0xtaUExZFE'>Please view my cover letter here</a></p>
          
          {close}
        </article>

        <article id="academic" className={`${this.props.article === 'academic' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Academics</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <h2>Transcript</h2>
          <p>A link to my academic <a href='https://drive.google.com/open?id=14uCh94Hi81fI87zzmIIhiFhCoBnfsU3S  '>transcript</a></p>
          <h2>Academic Work Samples</h2>
          <p>Please refer to my Github for some work <a href='https://github.com/kevinly77'>samples</a></p>
          <h2>Academic Awards</h2>
          <p>Currently a GBC-T127 Honor List Student for 5 Semesters</p>
          {close}
        </article>

        <article id="capstone" className={`${this.props.article === 'capstone' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Palendar</h2>
          <p>We as students have come to realize just how important communication and management skills are in order to become successful person, whether it be in education or the work environment.</p>
          <p>At Palendar, we wanted to create a product that combines a simple calendar, a task manager, and a live chat into an all in one product. The goal of this project will be to increase efficiency and effectiveness of planning, sharing and communication regarding everyday tasks, and ultimately improving your quality of life.</p>
          <p>The following are the process and relating documents that we have produced so far.</p>
          <p>Team size: 4 Members</p>
          <p>
            Technologies used:
            <ul>
              <li>React</li>
              <li>GraphQL</li>
              <li>NodeJs</li>
              <li>TypeScript</li>
              <li>Prisma</li>
              <li>UIKit</li>
              <li>MySQL</li>
              <li>Axios</li>
            </ul>
          </p>

          <ul>
            <li>
            <h2><a href='https://docs.google.com/document/d/1ZxA3IO1NWJS_17pEgTq2PWPqJmLMLwPKo-B9A_8wUlw/edit?usp=sharing'>Project Vision</a></h2>
            </li>
            <li>
            <h2><a href='https://docs.google.com/document/d/1kA75YwvDBUO50amgNhddeCxKkTzhOU5HcMPQkREWju8/edit?usp=sharing'>Business Requirements</a></h2>
            </li>
            <li>
            <h2><a href='https://docs.google.com/document/d/1QHeh01CkcbA_b4nmZ52z1v0e_8l9kwmr2wWdrXaa7z4/edit?usp=sharing'>Project Plan v1</a></h2>
            </li>
            <li>
            <h2><a href='https://docs.google.com/document/d/1ygnmc8T3RHtKZ_E6-12T9tZKEoaGY6cMntcIc-R-TIo/edit?usp=sharing'>Project Plan v2</a></h2>
            </li>
            <li>
            <h2><a href='https://docs.google.com/document/d/1guShPPBGxK4OsBikbSwdOpuH6kukP2V4ktjJUFpEJ9s/edit?usp=sharing'>Requirements Analysis and Design</a></h2>
            </li>
            <li>
            <h2><a href='https://drive.google.com/file/d/18ICDrThtbiis5QwiI4rY4yu1KCHMAk5J/view?usp=sharing'>Wireframes</a></h2>
            </li>
            <li>
            <h2><a href='https://docs.google.com/document/d/1DzDJXm0PlFRlnDSJtaEIgJuiv4CWb3XhV0myJu-FLE8/edit'>Status Report 1</a></h2>
            </li>
            <li>
            <h2><a href='https://docs.google.com/document/d/1vIBGZA1OOrZml4HdPDO-vHZ2vKfh0qPZGAYoNTK4ZtM/edit?usp=sharing'>Status Report 2</a></h2>
            </li>
            <li>
            <h2><a href='https://docs.google.com/document/d/1yzD_Vv7I0k4Sk_BSgOxbt-NclaO95SL84pw_ZZTaLQE/edit?usp=sharing'>Status Report 3</a></h2>
            </li>
            <li>
            <h2><a href='https://docs.google.com/presentation/d/1iAGp6oKOheP45TQ3GyjC3KeNqWWWKHSzf9U6_4mT30g/edit?usp=sharing'>Project Proposal Presentation</a></h2>
            </li>
            <li>
            <h2><a href='https://docs.google.com/presentation/d/1sx9uWfPSwTk3Wwm5DT_Q0MK81omShquGRH-1SNkdfPo/edit?usp=sharing'>Project Plan and Mockup Presentation</a></h2>
            </li>
            <li>
            <h2><a href='https://docs.google.com/presentation/d/19dEemxeeV79qyOD1iVNlk1Bq44iUgd3DNafx1gXMpKw/edit?usp=sharing'>Project Implementation Presentation</a></h2>
            </li>
            
          </ul>
          
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="mailto:kevinly7@hotmail.com" encType="text/plain">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/kevin-ly7/" className="icon fa-linkedin-square"><span className="label">Linkedin</span></a></li>
            <li><a href="https://github.com/kevinly77" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main