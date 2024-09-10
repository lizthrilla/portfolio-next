
export interface IJobType {
        company: string,
        companyWeb: string,
        dates: string,
        position: string,
        jobDescription: string,
        highlights: string
}
export interface IJobList {
    jobs: IJobType[];
}

export const JobsData = [
    {
        company:"Kin Insurance", 
        companyWeb: 'https://www.kin.com',
        dates: "March 2022 - Current",
        position: "Engineering Manager", 
        jobDescription: "Results-oriented Engineering Manager skilled in delivering high priority and high impact work within crucial time frames. A good communicator and empathic leader, able to effectively collaborate with cross-functional teams to drive successful project outcomes. Committed to fostering a positive and productive work environment to maximize team performance and deliver exceptional results.",
        highlights: "Spearheaded the creation of an Engineering Manager Guild and a Developer Community of Practice within the organization" 
    },
    {
        company:"Shogun", 
        companyWeb: 'https://www.getshogun.com',
        dates: "June 2021 - March 2022",
        position: "React Engineer", 
        jobDescription: "Shogun is an ecommerce experience platform empowering brands to drive higher conversions, revenue, and brand loyalty. Our products Shogun Page Builder and Shogun Frontend help teams build and optimize their online stores to deliver exceptional experiences.",
        highlights: "Worked on the Shogun Page Builder team to develop new features for our customers." 
    },
    {
        company:"The Academy at Suncoast Developers Guild", 
        companyWeb: 'https://www.suncoast.io',
        dates: "March 2019 - March 2022",
        position: "Instructor", 
        jobDescription: "Designed and delivered web development curriculum, focusing on React, front-end development,  and industry-relevant trends.",
        highlights: "The Academy at Suncoast Developers Guild is a code school that serves people, not profit. We are changing lives and teaching people to be the best software developers they can be." 
    },
    {
        company:"Agile Thought", 
        companyWeb: 'https://www.agilethought.com',
        dates: "January 2020 - June 2021",
        position: "Consultant", 
        jobDescription: "Technology consultant specializing in the front end development. Architected and delivered a dynamic Investor Qualification Statement application for a major law firm.",
        highlights: "Member of the Development Community of Practice team, which works to create learning opportunities for Agile Thought's employees." 
    },
    {
        company:"DXC Technology", 
        companyWeb: 'https://www.dxc.technology/',
        dates: "May 2019 - January 2020",
        position: "Professional Software Engineer", 
        jobDescription: "Developed custom applications for clients; utilizing React and Angular",
        highlights: "" 
    },
    {
        company:"Mad Mobile", 
        companyWeb: 'https://www.madmobile.com',
        dates: "January 2018 - May 2019",
        position: "Javascript Developer", 
        jobDescription: "Led a team of developers in delivering two major company websites and a React Native app for a Fortune 25 company.",
        highlights: "" 
    },
    {
        company:"Daniels Corporation", 
        companyWeb: 'https://www.danielscorporation.com/',
        dates: "March 2017 - December 2017",
        position: "Fullstack Developer", 
        jobDescription: "Built and managed ecommerce sites for a select group of family owned companies. Workin gin Ruby, Ruby on Rails, Ember, and Coldfusion",
        highlights: "Worked closely with the marketing team to opitmize search engine results." 
    },
]

export type EducationType = {
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