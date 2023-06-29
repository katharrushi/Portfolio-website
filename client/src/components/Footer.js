import React from 'react'
import "./footer.css"

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Rushikesh Kathar</h4>
            <p>© {year} Rushikesh Kathar All rights reserved</p>
            <p className='d-flex'>
              <i className='fa-brands fa-github'></i>
              <i className='fa-brands fa-linkedin mx-3'></i>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
           
            <p>rushikeshkathar45@gmail.com</p>
            <p>+91 8459229094</p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <a href={"https://docs.google.com/document/d/12cPXtfEd26RsLlHZolkMFWWffwbnTTGL/edit?usp=sharing&ouid=107609258653643709821&rtpof=true&sd=true"} target="_blank" className='text-decoration-none text-light'>Resume</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer