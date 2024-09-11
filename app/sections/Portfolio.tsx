import {FaPlus} from "react-icons/fa";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

const Portfolio = () => {
    return (
    <section id="portfolio" className="bg-gray-light w-full py-10 text-gray-dark flex flex-col items-center justify-center">
        <h1 className="uppercase text-xl tracking-wide">Some Fun Apps I've Built</h1>
        <div className="grid md:grid-cols-4 md:gap-1">
            <div className="grid-span-1">
                <div className="item-wrap">
                <a href="https://ryma.herokuapp.com/" target="_blank" title="Ryma - Hospitality Hackathon">
                    {/* <img alt="" src={Ryma} /> */}
                    <div className="overlay">
                    <div className="portfolio-item-meta">
                        <h5>Ryma</h5>
                        <p>Hospitality Hackathon 2017</p>
                        <p>React and Rails app</p>
                    </div>
                    </div>
                    <div className="link-icon">
                    <FaPlus />
                    </div>
                </a>
                </div>
            </div>

            <div className="grid-span-1">
                <Popover className="relative">
                    <PopoverButton>Solutions</PopoverButton>
                    <PopoverPanel anchor="bottom" className="flex flex-col">
                        <a href="/analytics">Analytics</a>
                        <a href="/engagement">Engagement</a>
                        <a href="/security">Security</a>
                        <a href="/integrations">Integrations</a>
                    </PopoverPanel>
                </Popover>
            </div>

            <div className="grid-span-1">
                <h1>item</h1>
            </div>

            <div className="grid-span-1">
                <h1>item</h1>
            </div>

        </div>
    </section>

    )

}
export default Portfolio