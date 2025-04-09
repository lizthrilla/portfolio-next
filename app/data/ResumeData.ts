
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
        dates: "March 2022 - March 2025",
        title: "Engineering Manager", 
        description: "I led a high-performing team of developers and QA engineers by fostering a psychologically safe, inclusive environment built on mentorship and collaboration. By optimizing Agile practices—refining sprint cadence and monitoring sprint health—I boosted team productivity by 33% and achieved 100% predictability in feature delivery. I partnered closely with product and design leads to align roadmaps with customer needs, streamlining workflows and accelerating delivery of high-impact features.",
        highlights: " I also drove company-wide initiatives, including launching a Developer Community of Practice and leading a revamp of Big Room/Continuous Planning, which strengthened cross-team alignment. Through focused coaching and career development, I maintained 100% team retention while nurturing growth, innovation, and knowledge-sharing across the organization." 
    },
    {
        company:"Shogun", 
        url: 'https://www.getshogun.com',
        dates: "June 2021 - March 2022",
        title: "React Engineer", 
        description: "I engineered scalable, high-performance front-end features for e-commerce SaaS platforms using React and TypeScript, improving load times and interactivity to boost user engagement. Working closely with product, design, and QA teams, I helped drive tight feedback loops and fast iteration cycles, ensuring development stayed closely aligned with real customer needs.",
        highlights: "" 
    },
    {
        company:"The Academy at Suncoast Developers Guild", 
        url: 'https://www.suncoast.io',
        dates: "March 2019 - March 2022",
        title: "Instructor", 
        description: "I designed and delivered front-end engineering curriculum with a focus on scalable software design and web accessibility. By mentoring students through real-world projects, I helped them build industry-relevant portfolios that led to high job placement rates. I also collaborated closely with instructors and staff to foster a well-rounded, effective learning environment.Designed and delivered web development curriculum, focusing on React, front-end development, and industry-relevant trends.",
        highlights: "The Academy at Suncoast Developers Guild is a code school that serves people, not profit. We are changing lives and teaching people to be the best software developers they can be." 
    },
    {
        company:"Agile Thought", 
        url: 'https://www.agilethought.com',
        dates: "January 2020 - June 2021",
        title: "Consultant", 
        description: "I led a cross-functional team in delivering scalable web applications for enterprise clients, aligning technical execution with business goals to ensure projects were delivered on time and within budget. I architected and implemented a scalable Investor Qualification Statement application, and provided technical mentorship across teams.",
        highlights: "Through the Developer Community of Practice, I helped drive the adoption of engineering best practices and contributed to ongoing internal knowledge-sharing."
    },
    {
        company:"DXC Technology", 
        url: 'https://www.dxc.technology/',
        dates: "May 2019 - January 2020",
        title: "Professional Software Engineer", 
        description: "I led development projects using React and Angular, with a strong focus on scalability and performance optimization. By collaborating across development, QA, and business teams, I ensured technical solutions were aligned with business requirements and delivered effectively.",
        highlights: "" 
    },
    {
        company:"Mad Mobile", 
        url: 'https://www.madmobile.com',
        dates: "January 2018 - May 2019",
        title: "Javascript Developer", 
        description: "I led a team of developers in delivering two major company websites and a high-performing React Native mobile app for a Fortune 25 client. Partnering closely with design and product teams, I helped craft innovative native app experiences that balanced user needs with technical feasibility and delivered real business value.",
        highlights: "" 
    },
    {
        company:"Daniels Corporation", 
        url: 'https://www.danielscorporation.com/',
        dates: "March 2017 - December 2017",
        title: "Fullstack Developer", 
        description: "I developed and maintained e-commerce platforms with a focus on improving SEO and user experience. I also led the migration of legacy ColdFusion systems to modern frameworks, including Ruby on Rails and Ember.js, enhancing performance, maintainability, and scalability.",
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