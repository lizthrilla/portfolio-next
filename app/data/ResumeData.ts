
export interface IJob {
    company: string,
    url?: string,
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
        "company": "Freelance Web Consultant",
        "url": "/#case-study",
        "dates": "April 2025 – Present",
        "title": "Web Consultant",
        "description": "Provide part-time consulting for small businesses and individuals to enhance their online presence. Work includes website updates, accessibility audits, SEO improvements, and workflow automation using AI tools.",
        "highlights": "Recent projects: improved accessibility for service websites, optimized SEO for higher rankings, and advised entrepreneurs on integrating AI to streamline operations."
    },
    {
      "company": "Kin Insurance",
      "url": "https://www.kin.com",
      "dates": "March 2022 - March 2025",
      "title": "Engineering Manager",
      "description": "Led a team of 5 engineers and QA in building critical insurance tooling, including the internal-first eFNOL claims intake app and Scribe, a letter automation platform. Balanced high-stakes compliance and hurricane-season deadlines with sustainable delivery, achieving 100% predictability in feature delivery and 33% productivity gains. Partnered with Product, Legal, and Claims to ensure solutions aligned with real-world workflows, reducing adjuster time and legal risk.",
      "highlights": "Founded Kin’s Developer Community of Practice and Engineering Managers Guild, driving cross-team learning and career growth. Revamped org-wide planning and Scrum adoption, boosting roadmap clarity by 50%. Maintained 100% retention through intentional mentorship and coaching, including promoting a senior engineer to staff level and designing growth plans for associates."
    },
    {
      "company": "Shogun",
      "url": "https://www.getshogun.com",
      "dates": "June 2021 - March 2022",
      "title": "React Engineer",
      "description": "Engineered modular React and TypeScript components for Shogun’s Page Builder SaaS platform, empowering e-commerce merchants to launch and customize storefronts on Shopify and beyond. Partnered across design, product, and QA for rapid, customer-centered iteration.",
      "highlights": "Interviewed and mentored early QA hires, helping scale Shogun’s testing maturity."
    },
    {
      "company": "The Academy at Suncoast Developers Guild",
      "url": "https://www.suncoast.io",
      "dates": "March 2019 - March 2022",
      "title": "Instructor",
      "description": "Designed and taught front-end engineering curriculum with a focus on React, accessibility, and scalable design. Mentored students through project-based learning, preparing them with industry-ready portfolios and strong placement outcomes.",
      "highlights": "Created accessibility training adopted across all cohorts; collaborated with staff to foster an inclusive, mission-driven learning environment."
    },
    {
      "company": "AgileThought",
      "url": "https://www.agilethought.com",
      "dates": "January 2020 - June 2021",
      "title": "Lead Technology Consultant",
      "description": "Architected and delivered the frontend of a $100T investor onboarding platform for Kirkland & Ellis, cutting qualification turnaround from days to minutes while ensuring regulatory compliance. Balanced technical execution with business goals, leading cross-functional delivery and mentoring developers.",
      "highlights": "Contributed to Developer Community of Practice, championing engineering best practices and knowledge-sharing."
    },
    {
      "company": "DXC Technology",
      "url": "https://www.dxc.technology/",
      "dates": "May 2019 - January 2020",
      "title": "Professional Software Engineer",
      "description": "Engineered custom web apps on the Cornerstone learning platform for Fortune 500 clients, delivering scalable, brand-aligned solutions for companies including Honeywell, Samsung, and PwC.",
      "highlights": ""
    },
    {
      "company": "Mad Mobile",
      "url": "https://www.madmobile.com",
      "dates": "January 2018 - May 2019",
      "title": "JavaScript Developer",
      "description": "Co-led React Native app development for a Fortune 25 retail client, powering $40B+ in annual revenue. Partnered with design and product to build innovative mobile experiences and launched two major company websites.",
      "highlights": "Designed and shipped Concierge’s fulfillment feature, transforming physical storefronts into on-demand fulfillment hubs."
    },
    {
      "company": "Daniels Corporation",
      "url": "https://www.danielscorporation.com/",
      "dates": "March 2017 - December 2017",
      "title": "Fullstack Developer",
      "description": "Maintained and modernized e-commerce platforms across multiple product lines. Migrated legacy ColdFusion systems to Rails and Ember.js, improving scalability and maintainability.",
      "highlights": "Boosted growth at JupiterBike.com by optimizing SEO, achieving top search rankings and increased visibility."
    }
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