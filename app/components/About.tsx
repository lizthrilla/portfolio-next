
import { FaFileDownload } from "react-icons/fa";
import Image from "next/image";
import Socials from './Socials'

import profilePic from "../assets/headshot.jpeg";

const About = () => (
  <section id="about" className="bg-gray-dark flex flex-row p-5 md:py-20 h-50 items-center">
      <div className="hidden md:block ">
        <Image className="profile-pic rounded-full " src={profilePic} alt="" />
      </div>
      <div className="flex-col p-5">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p>
          I am a recovering film academic turned front end developer and engineering manager. As an empathetic and results-driven Engineering Manager, I am dedicated to cultivating a thriving, cohesive team environment. My approach is holistic, emphasizing the well-being and productivity of every team member. I prioritize building trust, fostering accountability, and encouraging experimentation to unlock our collective potential.
        </p>
        <p>
          I am passionate about web accessibility, over analyzing movies,
          <a className="text-yellow hover:text-blue" href="https://www.instagram.com/thegreatgizmodo/"> my cats </a>,
          <a className="text-yellow hover:text-blue" href="http://michaelenash.com"> my husband</a> and
          <a className="text-yellow hover:text-blue" href="https://www.midnightlotusdance.com/"> belly dance</a>.
        </p>
        <div className="flex flex-row justify-between items-center lg:text-2xl">
          <Socials />
          <div>
              <a href="https://docs.google.com/document/d/1FF4tocHbjnaTjyb8wSMrnPlDk6XHfcAxAmOHYXyJ3uY/pub" target="_blank" className="flex items-center" >
                {/* <FaFileDownload />  */}
                <p>Resume</p>
              </a>
          </div>
        </div>
    </div>
  </section>
);

export default About;
