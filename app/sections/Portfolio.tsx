
import { PopOverComponent } from "@/app/components/index";
import { IPortfolio, PortfolioData } from "@/app/data/index";

const Portfolio = () => {
    return (
    <section id="portfolio" className="bg-dark text-lightt w-full py-20 flex flex-col items-center justify-center">
        <h3 className="uppercase text-xl tracking-wide">Some Fun Apps I Have Built</h3>
       
        <div className="grid md:grid-cols-4 md:gap-4">
            {
                PortfolioData.map((proj:IPortfolio, i: number) => (
                    <PopOverComponent appTitle={proj.appTitle} description={proj.description} githubLink={proj.githubLink} imgSrc={proj.imgSrc} link={proj.link} key={i}/>
                ))
            }
        </div>
        <h3>Visit my <a href="https://github.com/lizthrilla" target="_blank"> github</a> to see what I am working on now.</h3>
    </section>

    )

}
export default Portfolio