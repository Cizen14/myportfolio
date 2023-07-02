import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import{FaAward} from 'react-icons/fa'
const About = () => {
  return (
   <section id='about'> 
   <h5> Get to Know</h5>
   <h2> About Me</h2>

 <div className='container about_container'>
  <div className='about_me'>
    <div className='about_me-image'>
      <img src={ME} alt='About ME'/>
    </div>
  </div>
  <div className='about_content'>
    <div className='about_cards'>
      <article className='about_card'>
        <FaAward className='about_icon'/>
        <h5> Experience</h5>
        <small> Entry Level</small>


      </article>
    </div>
    <p> 
    Recently graduated in bachelor’s degree in information technology and specialist in Web Development. Highly poised and dedicated with talent in design principles and programming languages. Excellent eye for visual aesthetics paired with insight into data and backend functionality.
Talented Website Developer equipped with great coding, debugging and project management abilities and accomplishes project goals consistently with elegant, scalable code.
Highly motivated employee with desire to take on new challenges. Strong worth ethic, adaptability, and exceptional interpersonal skills. Adept at working effectively unsupervised and quickly mastering new skills. Works great with team members under Agile and Scrum frameworks.

    </p>
    <a href='#contact' className='btn btn-primary'>Let's Talk</a>

  </div>
 
    </div>
   </section>
  )
}

export default About
