import { FaAngleDoubleDown } from "react-icons/fa";

export default function Intro() {
    return (
        <div className="text-center flex flex-col justify-center items-center text-light text-xl lg:text-2xl font-serif-regular font-bold max-w-5xl">
            <h1 className="text-4xl lg:text-6xl text-light font-sans-serif tracking-tight mb-5">
              Liz Tiller
            </h1>
            <p>
                I am a Tampa based <span className="text-yellow">tech leader</span>, <span className="text-yellow">full-stack developer</span>, and
                <span className="text-yellow"> AI systems builder,</span> focused on accelerating delivery through intelligent workflows and thriving teams. 
              
            </p>
            <p className="py-5">
                Welcome and scroll to learn more!
            </p>
            <FaAngleDoubleDown aria-hidden="true" className="animate-bounce-subtle text-2xl text-yellow" />
          </div>

    )
}