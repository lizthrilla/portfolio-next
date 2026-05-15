
import Image from "next/image";
import { Socials } from "../components/index";

import profilePic from "@/app/assets/images/headshot.jpeg";

const About = () => (
  <section id="about" className="bg-gray-dark grid md:grid-cols-10 md:gap-5 items-center px-5 py-16">
      <div className="md:col-span-2 md:col-start-2 m-5">
        <Image className="profile-pic rounded-full size-3/4 m-auto md:size-full" src={profilePic} alt="Elizabeth Tiller, professional headshot" />
      </div>
      <div className="md:col-span-8 md:col-start-4 md:col-end-9">
        <div className="pb-5">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p>
            I am a recovering film academic turned developer and technical leader who believes technology works best when teams do. I lead with empathy, move with urgency, and stay grounded by the people and interests that matter most: teaching, mentorship, accessibility, and the small joys that make life worth living.
          </p>
          <p>
            Outside of work: film nerd,
            <a className="text-yellow hover:text-blue" href="https://www.instagram.com/thegreatgizmodo/"> cat enthusiast </a>,
            <a className="text-yellow hover:text-blue" href="https://www.midnightlotusdance.com/"> belly danceer</a>, and cheering on
            <a className="text-yellow hover:text-blue" href="http://michaelenash.com"> my incredible husband</a> 
          </p>
        </div>
      <Socials />
    </div>
  </section>
);

export default About;
