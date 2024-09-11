import Image from "next/image";
import Hero from "./sections/HeroSection/Hero"
import Navbar from "./sections/Navigation/Navbar";
import About from "./sections/About";
import Resume from "./sections/Resume/Resume";
// import Portfolio from './sections/Portfolio';
import Orgs from './sections/Orgs';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 text-light overflow-hidden"> 
    {/* might want to add py-24 to main */}
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Resume />
      <Orgs />

    </main>
  );
}
