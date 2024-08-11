import React, { useState } from "react";
import "./skills.css";
import react from "../../assets/react.png";
import node from "../../assets/node.jpg";
import js from "../../assets/javascript.png";
import python from "../../assets/python.png";
import sql from "../../assets/sql.png";
import firebase from "../../assets/firebase.png";

const Skills = () => {
  const [imgState, setImageState] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const handleMouseOver = (id) => {
    setImageState((prev) => {
      let newState = [...prev];
      newState[id] = false;
      return newState;
    });
  };
  const handleMouseLeave = (id) => {
    setImageState((prev) => {
      let newState = [...prev];
      newState[id] = true;
      return newState;
    });
  };
  return (
    <section id="skills">
      <span className="skillTitle">These are some of my key skills.</span>
      <div className="skillImages">
        {imgState[0] ? (
          <button onMouseOver={() => handleMouseOver(0)} className="skillImg">
            <img src={react} alt="react" className="Img" />
          </button>
        ) : (
          <div className="skillText" onMouseLeave={() => handleMouseLeave(0)}>
            <h3>ReactJs</h3>
            <p>
              I am having an experience of about 3 years in React. I have worked
              on it in TCS and I have also created some of my personal projects.
              I am also currently learning about some additional concepts like
              Redux and NextJs.
            </p>
          </div>
        )}
        {imgState[1] ? (
          <button onMouseOver={() => handleMouseOver(1)} className="skillImg">
            <img src={node} alt="node" className="Img" />
          </button>
        ) : (
          <div className="skillText" onMouseLeave={() => handleMouseLeave(1)}>
            <h3>NodeJs</h3>
            <p>
              I have about 1 year of working experience in NodeJs along with
              ExpressJS. I have used it in my project with TCS along with in one
              of my personal project( Travel Journal)
            </p>
          </div>
        )}
        {imgState[2] ? (
          <button onMouseOver={() => handleMouseOver(2)} className="skillImg">
            <img src={js} alt="js" className="Img" />
          </button>
        ) : (
          <div className="skillText" onMouseLeave={() => handleMouseLeave(2)}>
            <h3>Java Script</h3>
            <p>
              I am having a good knowledge of javascript. I came across it in my
              college days and since then I am using it.
            </p>
          </div>
        )}
        {imgState[3] ? (
          <button onMouseOver={() => handleMouseOver(3)} className="skillImg">
            <img src={python} alt="python" className="Img" />
          </button>
        ) : (
          <div className="skillText" onMouseLeave={() => handleMouseLeave(3)}>
            <h3>Python</h3>
            <p>
              I have learnt Python in my college and also have developed
              multiple project in it which includes Data Science and Machine
              Learning as well.
            </p>
          </div>
        )}
        {imgState[4] ? (
          <button onMouseOver={() => handleMouseOver(4)} className="skillImg">
            <img src={sql} alt="sql" className="Img" />
          </button>
        ) : (
          <div className="skillText" onMouseLeave={() => handleMouseLeave(4)}>
            <h3>SQL</h3>
            <p>
              I am having knowledge of SQL along with it I have used Postgres
              and MySql in multiple projects.
            </p>
          </div>
        )}
        {imgState[5] ? (
          <button onMouseOver={() => handleMouseOver(5)} className="skillImg">
            <img src={firebase} alt="firebase" className="Img" />
          </button>
        ) : (
          <div className="skillText" onMouseLeave={() => handleMouseLeave(5)}>
            <h3>Firebase</h3>
            <p>
              I came across Firebase last year and I have used its
              functionalities like storage, database and hosting.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
