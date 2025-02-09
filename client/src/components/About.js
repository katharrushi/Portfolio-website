import React from 'react'
import "./About.css"

const About = () => {
  return (
  <>
  <div className="container mb3 about_container" style={{minHeight:"100%"}}>

    <div className="container main_container d-flex justify-content-around flex-wrap">

      <div className="left_container mt-5" style={{width:500}}>
      <h2>Meet Rushikesh Kathar</h2>
      <p style={{color:"#666", letterSpacing:"0.5px",marginTop:2, lineHeight:2 }}>Welcome to my website! I am a passionate 4th year B.Tech student specializing in Information Technology at MGM University. With a focus on front-end development and expertise in programming languages like Java, I am dedicated to delivering high-quality work that exceeds expectations. <br /> My attention to detail and leadership skills enable me to tackle complex coding projects with creative solutions. Through coursework and extracurricular activities, I have honed my skills in various programming languages and web development frameworks. <br /> I am always eager to learn and connect with like-minded professionals in the technology field. Let's collaborate and make a difference together!
      </p>
      </div>
      <div className="right_container mt-5">
        <img src="myimage.png" alt="" />
        </div>

    </div>

  </div>
  </>
  )
}

export default About
