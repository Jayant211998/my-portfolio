import React from 'react'
import './about.css';
const About = () => {
  return (
    <section id="about">
        <span className='title'>Experience</span>
        <div className='details'>
            <p>I have about two years of working experience in different technologies like React, Node, Postgresql, Python, Data Science, Machine Learning and ELK.</p>
            <br/>
            <div className='experience'>
                <div className='company'>
                    <h2>Tata Consultancy Service</h2>
                    <h3>Systems Engineer </h3> 
                    <p>(August 2021 - Present)</p>
                    <br/>
                    <ul>
                        <li>
                            I developed a Nodejs, Reactjs, and Postgres-based project
                            called Learning Module for creating employee courses. I
                            have developed Admin and Batches modules, handling
                            course and roles assignments for individuals and groups.
                        </li><br/>
                        <li>
                            I am presently engaged in an IBM project, where my focus
                            involves assessing API endpoints across various applications. This enables users to seamlessly engage with APIs, granting
                            them access to data from diverse applications and create an interaction between different usecases.
                        </li>
                    </ul>
                </div>
                <div className='company'>
                    <h2>Consultadd</h2>
                    <h3>Associate Software Developer Intern </h3>
                    <p>(January 2021 - May 2021)</p>
                    <br/><br/>
                    <ul>
                        <li>
                            Developed a dashboard using React for administration.
                        </li>
                        <li>
                            I have also worked on Elasticsearch, Logstash and Kibana. In
                            one of my assignments I have created an AWS cluster with ELK. 
                        </li>
                        <li>
                            I have also worked on postman to test the backend API's and
                            integrated them in React code.
                        </li>
                    </ul>
                </div>                  
            </div>
        </div>
    </section>
  );
}

export default About;