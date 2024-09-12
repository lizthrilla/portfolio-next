import { CatsMemory, RainApp, Ryma, Tarot } from "../assets/images/portfolio/Index";

export interface IPortfolio {
    appTitle: string;
    description: string;
    githubLink: string;
    imgSrc: any;
    link?: string;
}

export const PortfolioData = [
    {
        appTitle: 'Tarot with Sybil',
        description: 'A react tarot card app and promotion tool for paranormal mystery manuscript',
        githubLink: 'https://github.com/lizthrilla/tarot',
        imgSrc: Tarot,
        link: 'http://tarot.lizthrilla.surge.sh/'
    }, 
    {
        appTitle: 'Ryma Luggage App',
        description: 'React + Rails for Hospitality Hackathon 2017',
        githubLink: 'https://github.com/utumno86/ryma',
        imgSrc: Ryma,
    }, 
    {
        appTitle: 'Memory',
        description: 'A simple React memory game',
        githubLink: 'https://github.com/lizthrilla/memory',
        imgSrc: CatsMemory,
        link: 'http://memory.lizthrilla.surge.sh'
    }, 
    {
        appTitle: 'Make It Rain',
        description: 'Drop some benjamins in the club.',
        githubLink: 'https://github.com/lizthrilla/make-it-rain',
        imgSrc: RainApp,
        link: "http://rain.lizthrilla.surge.sh"
    }, 
]