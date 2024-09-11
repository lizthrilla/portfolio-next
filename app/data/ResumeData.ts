
export interface IJob {
    company: string,
    url: string,
    dates: string,
    title: string,
    description: string,
    highlights: string
}
export interface IJobList {
    jobs: IJob[];
}

export const JobsData = [
    {
        company:"Kin Insurance", 
        url: 'https://www.kin.com',
        dates: "March 2022 - Current",
        title: "Engineering Manager", 
        description: "Leading the delivery of high-impact engineering projects, ensuring alignment with OKRs and business goals through empathetic leadership, mentoring, and technical expertise.",
        highlights: "Spearheaded the creation of an Engineering Manager Guild and a Developer Community of Practice within the organization." 
    },
    {
        company:"Shogun", 
        url: 'https://www.getshogun.com',
        dates: "June 2021 - March 2022",
        title: "React Engineer", 
        description: "Worked on Shogun Page Builder to empower brands to optimize their online stores to deliver exceptional experiences.",
        highlights: "" 
    },
    {
        company:"The Academy at Suncoast Developers Guild", 
        url: 'https://www.suncoast.io',
        dates: "March 2019 - March 2022",
        title: "Instructor", 
        description: "Designed and delivered web development curriculum, focusing on React, front-end development, and industry-relevant trends.",
        highlights: "The Academy at Suncoast Developers Guild is a code school that serves people, not profit. We are changing lives and teaching people to be the best software developers they can be." 
    },
    {
        company:"Agile Thought", 
        url: 'https://www.agilethought.com',
        dates: "January 2020 - June 2021",
        title: "Consultant", 
        description: "Technology consultant specializing in the front end development. Architected and delivered a dynamic Investor Qualification Statement application for a major law firm.",
        highlights: "Member of the Development Community of Practice team, which works to create learning opportunities for Agile Thought's employees." 
    },
    {
        company:"DXC Technology", 
        url: 'https://www.dxc.technology/',
        dates: "May 2019 - January 2020",
        title: "Professional Software Engineer", 
        description: "Developed custom applications for clients; utilizing React and Angular",
        highlights: "" 
    },
    {
        company:"Mad Mobile", 
        url: 'https://www.madmobile.com',
        dates: "January 2018 - May 2019",
        title: "Javascript Developer", 
        description: "Led a team of developers in delivering two major company websites and a React Native app for a Fortune 25 company.",
        highlights: "" 
    },
    {
        company:"Daniels Corporation", 
        url: 'https://www.danielscorporation.com/',
        dates: "March 2017 - December 2017",
        title: "Fullstack Developer", 
        description: "Built and managed ecommerce sites for a select group of family owned companies. Working in Ruby, Ruby on Rails, Ember, and Coldfusion",
        highlights: "" 
    },
]

export interface IEducation {
    school: string,
    degree: string,
    location: string,
    graduation: string,
    thesis: string
}
export const EducationData = [
    {
        school: "The Iron Yard",
        degree: "Certificate in Front-End Engineering",
        location: 'St Pete, FL',
        graduation: "February 2017",
        thesis: "'Tarot By Sybil' - React App"
    },
    {
        school: "University of Stirling",
        degree: "Master of Philosophy - Literature and Languages",
        location: 'Scotland, UK',
        graduation: "May 2017",
        thesis: "Thesis: 'Women Walking - The Representation of Female Tourist in Paris and Tuscany'; Evaluated theories surrounding the female gaze, flanerie, and tourism.",
    },
    {
        school: "University of Glasgow",
        degree: "Master of Letters (with Distinction) - European Cinema",
        location: 'Scotland, UK',
        graduation: "May 2009",
        thesis: "Dissertation: Queering the Femme Fatale; looked at the role of transsexual femme fatales in the films of Pedro Almodovar from the 1980s to Bad Education (2004)."
    },
    {
        school: "Pitzer College - Claremont Consortium",
        degree: "Bachelors - Media Studies (Film Production) and Theater",
        location: 'Scotland, UK',
        graduation: "May 2007",
        thesis: "Senior Media Project: 'She's Revamped' a rewriting of Robert Iscove's She's All That (1999) combining video and performance art with gender/sexuality theory and Boal's Theatre of the Oppressed."
    },
]

export interface IConference {
    title: string,
    summary: string,
    conference1?: {
        name?: string,
        date?: string,
        url?: string,
    },
    conference2?: {
        name?: string,
        location?: string,
        date?: string,
        url?: string,
    }
}

export const ConferenceData = [
    {
        title: 'How Not to Get Sued: Basic Web Accessibility',
        summary: "Web Accessibility is everyone's responsibility. In this talk, you will learn the basics of web accessibility, how to read the WCAG, and things you can implement immediately in your work.",
        conference1: {
            name: 'Women Who Code - Tampa',
            date: "June 2020",
        },
        conference2: {
            name: 'Suncoast Developers Guild - St Pete',
            date: 'Part of the Curriculum'
        }
    }, 
    {
        title: "Why Can't We Be Friends",
        summary: "React Native is advertised as a framework for developing native apps with JavaScript. However, developing Android apps requires more effort. This talk looked at the ways in which my team and I learned, sometimes the hard way, how to develop a React Native app for Android, as well as my experience as a JavaScript developer being thrust into the native world.",
        conference1: {
            name: 'Women Who Code - Connect NYC',
            date: "December 5, 2019",
        },
        conference2: {
            name: 'Chain React - Portland',
            date: 'July 11, 2019',
            url: 'https://www.youtube.com/watch?v=BRLkfXtRIKI&list=PLFHvL21g9bk2bTWTCP1BueiiIz8q258z9&index=19'
        }
    }, 
    {
        title: "Panel: Get Your Code On",
        summary: "Organized and participated in a panel about alternative opportunities to learn to code in the Tampa Bay Area.",
        conference1: {
            name: 'Women in Data + Science - Saint Leo University',
            date: "March 1, 2019",

        }
    }, 
    {
        title: "Panel: Inclusive Design and Development with Web Accessibility Panel",
        summary: "The focus on improving web accessibility has indavertently shifted to avoiding lawsuits when, more importantly, on the other end of the screen is a user base that is being excluded. In this panel discussion, you'll hear from two front-end developers/accessibility advocates and two assistive technology users to hear how incorporating a focus on web accessibility can transform your users' experiences for the better.",
        conference1: {
            name: 'Startup Week Tampa Bay 2019',
            date: "February 4, 2019",
            url: 'https://techstarsstartupweektampabay2019.sched.com/event/KBl9'
        }
    }, 
    {
        title: "Dispatches from React Native",
        summary: "This talk was later worked into Why Can't We be Friends.",
        conference1: {
            name: 'DevFest Florida',
            date: "January 19, 2019",
        }
    }, 
  
]

export interface IWriting {
    date: string;
    publication: string;
    summary: string;
    title: string;
    url: string; 
}

export const WritingData = [{
    date: "Spring 2020",
    publication: "Fanoos Magazine: The Lantern-Bellydance Quarterly",
    summary: "Let’s do a quick exercise. Open your search engine of choice (mine is Google) and type in “bellydance” followed by your city. Take a look at the results. Are you in there? Well done! You’ve mastered the art of Search Engine Optimization (SEO). If you aren’t there, try searching for your name and city. Are you there now? Great, you’re doing pretty good, but wouldn’t you prefer to be in that first search? If you aren’t, don’t worry I’m here to help you. With a few tweaks we can set you on your way to rising in the search results.",
    title: 'Shimmy Your Way into those Search Results!',
    url: 'https://www.fanoosmagazine.com/post/shimmy-your-way-into-those-search-results'
}]