
import Image from "next/image";
import Socials from '../components/Socials'

import profilePic from "@/app/assets/images/headshot.jpeg";

const About = () => (
  <section id="about" className="bg-gray-dark grid md:grid-cols-10 md:gap-5 items-center px-5 py-10">
      <div className="md:col-span-2 md:col-start-2 m-5">
        <Image className="profile-pic rounded-full size-3/4 m-auto md:size-full" src={profilePic} alt="" />
      </div>
      <div className="md:col-span-8 md:col-start-4 md:col-end-9">
        <div className="pb-5">
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
        </div>
      <Socials />
    </div>
  </section>
);

export default About;
