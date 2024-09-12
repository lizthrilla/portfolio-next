import { FaAngleDoubleDown } from "react-icons/fa";

export default function Intro() {
    return (
        <div className="text-center flex flex-col justify-center items-center text-light text-xl lg:text-2xl font-serif-regular font-bold max-w-5xl">
            <h1 className="text-4xl lg:text-6xl text-light font-sans-serif tracking-tight mb-5">
              Liz Tiller
            </h1>
            <p>
                I am a Tampa based <span className="text-yellow">engineering manager</span>, <span className="text-yellow">front end developer</span>, and
                <span className="text-yellow"> community organizer,</span> who is passionate about front end development and teaching the next generation of programmers. 
              
            </p>
            <p className="py-5">
                Welcome and scroll to learn more!
            </p>
            <FaAngleDoubleDown />
          </div>

    )
}