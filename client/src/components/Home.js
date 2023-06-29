import React from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>
              {" "}
              Hi, I'm{" "}
              <span style={{ color: "#6c63ff" }}>Rushikesh Kathar</span>
            </h2>
            <p style={{ color: "#666", letterSpacing: "0.5px", marginTop: 2 }}>
            Passionate 3rd year B.Tech student specializing in front-end development and Java programming, dedicated to delivering high-quality work. Seeking opportunities to learn and connect with professionals in the technology field. collaborate and grow together!
            </p>
            <div className="btn_div mt-4">
              <Button
                variant="danger"
                style={{
                  background: "#2f2d69",
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: 4,
                  marginRight: 24,
                }}
              >
                 <a href={"https://github.com/katharrushi"} target="_blank" className='text-decoration-none text-light'>Github</a>
              </Button>
              <Button
                variant="danger"
                style={{
                  background: "#6c63ff",
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: 4,
                  marginRight: 24,
                }}
              >
                 <a href={"https://www.linkedin.com/in/rushikesh-kathar-529708222/"} target="_blank" className='text-decoration-none text-light'>Linkedin</a>
              </Button>
            </div>
          </div>
          <div className="right_div">
            <img src="hp.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
