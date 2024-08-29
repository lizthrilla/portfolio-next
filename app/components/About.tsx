
import { FaCloudDownloadAlt } from "react-icons/fa";
import Image from "next/image";

import profilePic from "../assets/headshot.jpeg";

const About = () => (
  <section id="about" className="grid-cols-3 grid-rows-1 justify-center px-24">
    {/* <div className="row"> */}
      <div className="three columns">
        <Image className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          I am a recovering film academic turned front end developer and engineering manager. As an empathetic and results-driven Engineering Manager, I am dedicated to cultivating a thriving, cohesive team environment. My approach is holistic, emphasizing the well-being and productivity of every team member. I prioritize building trust, fostering accountability, and encouraging experimentation to unlock our collective potential.
        </p>
        <p>
          I am passionate about web accessibility, over analyzing movies, my
          <a href="https://www.instagram.com/thegreatgizmodo/"> cats </a>, my
          <a href="http://michaelenash.com"> husband</a> and
          <a href="https://www.midnightlotusdance.com/"> belly dance</a>.
        </p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-evenly items-evenly">
            <h2>Contact Details</h2>
            <p className="address">
              <span>elizabeth.tiller@gmail.com</span>
            </p>
          </div>
          <div className="flex flex-col download">
            <p>
              <a href="https://docs.google.com/document/d/1FF4tocHbjnaTjyb8wSMrnPlDk6XHfcAxAmOHYXyJ3uY/pub" target="_blank" className="button" >
              <FaCloudDownloadAlt />
                Download Resume
              </a>
            </p>
          </div>
        </div>
      {/* </div> */}
    </div>
  </section>
);

export default About;
