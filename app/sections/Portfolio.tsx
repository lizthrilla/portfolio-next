import {FaPlus} from "react-icons/fa";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import PopOverComponent from "../components/Popover/Popover";
import { IPortfolio, PortfolioData } from "../data/PortfolioData";

const Portfolio = () => {
    return (
    <section id="portfolio" className="bg-gray-light w-full py-20 text-gray-dark flex flex-col items-center justify-center">
        <h3 className="uppercase text-xl tracking-wide">Some Fun Apps I Have Built</h3>
       
        <div className="grid md:grid-cols-4 md:gap-4">
            {
                PortfolioData.map((proj:IPortfolio, i: number) => (
                    <PopOverComponent appTitle={proj.appTitle} description={proj.description} githubLink={proj.githubLink} imgSrc={proj.imgSrc} link={proj.link} key={i}/>
                ))
            }
        </div>
        <h3>Visit my <a href="https://github.com/lizthrilla" target="_blank"> github</a> to see what I'm working on now.</h3>
    </section>

    )

}
export default Portfolio