import { About, Hero, Orgs, Portfolio, Resume, CaseStudy } from './sections/Index'
import { Footer } from './components/index'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 text-light overflow-hidden relative"> 
    {/* might want to add py-24 to main */}
      <div className="z-10 w-full items-center justify-between text-sm lg:flex" id="home">
        <Hero />
      </div>
      <About />
      <Resume />
      <CaseStudy />
      <Portfolio />
      <Orgs />
      <Footer />
    </main>
  );
}
