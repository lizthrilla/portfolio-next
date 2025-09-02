import { Tarot } from "../assets/images/portfolio/Index";
export interface ICaseStudyBlurb {
    title: string,
    description: string,
    technologies: string[],
    slug: string,
}

export const CaseStudyBlurbData = [ 
    {
        title: 'Business Automation for Oriana',
        description: 'Helping a professional dancer streamline her business through SEO insights and workflow automation.',
        technologies: ['Manychat', 'Google Calendar', 'ChatGPT', 'Notion'],
        slug: 'case-study-oriana'
    },
    // {
    //     title: 'Website Redesign for Butterfly Financial Consultants',
    //     description: 'A focused redesign project for Butterfly Financial Consultants (jetiller.com), modernizing their online presence and brand identity to reflect their expertise in reinsurance, capital planning, and strategic consulting.',
    //     technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Headless UI', 'Canva', 'AI-assisted design'],
    //     slug: 'case-study-jetiller'
    // },
    {
        title: 'Tarot with Sybil',
        description: 'An interactive React-based tarot card app built as my code school capstone project, designed both as a learning milestone and as a promotional tool for a paranormal mystery manuscript by Denise Tiller.',
        technologies: ['React', 'JavaScript', 'CSS', 'Surge'],
        slug: 'case-study-tarot'
    }
]  
 
export const CaseStudies = {
    'case-study-oriana': {
        title: 'Business Automation for Oriana',
        description: 'A comprehensive case study of how I helped Oriana — a professional belly dancer, instructor, author, and founder of Fanoos Magazine — streamline her business through SEO insights and workflow automation.',
        problem: 'Oriana faced fragmented workflows across scheduling, publishing, and communications. She spent significant time on repetitive tasks such as student coordination, magazine contributor management, and manual social media updates. Her website also needed improved visibility, which I had initially addressed through a detailed SEO audit.',
        solution: 'I designed and implemented a tailored business automation strategy. This included an online booking and scheduling system, automated email sequences, structured publishing workflows for Fanoos Magazine, and tools to streamline social media and event coordination. These efforts built on the earlier SEO audit to align her digital presence with her operational efficiency.',
        technologies: ['Manychat', 'Google Calendar', 'ChatGPT', 'Notion'],
        outcomes: 'Oriana achieved a 40% reduction in administrative workload, improved student retention through reliable scheduling and communication, accelerated publishing cycles for Fanoos Magazine, and strengthened online visibility with consistent digital activity supported by SEO improvements.',
        image: '',
        website: 'https://www.orianabellydancer.com/'
    }, 
    'case-study-jetiller': {
        title: 'Website Redesign for Butterfly Financial Consultants',
        description: 'A focused redesign project for Butterfly Financial Consultants (jetiller.com), modernizing their online presence and brand identity to reflect their expertise in reinsurance, capital planning, and strategic consulting.',
        problem: 'Butterfly Financial Consultants had an outdated website and logo that no longer reflected the authority and professionalism of their business. The site lacked a modern design system, mobile responsiveness, and accessibility best practices. Their branding needed a refresh to better align with their reputation as industry leaders in reinsurance and financial consulting.',
        solution: 'I led a full redesign of jetiller.com using a modern React-based stack. I implemented a responsive Next.js site styled with Tailwind CSS and Headless UI for accessible, scalable components. I also updated the company’s branding with a refreshed logo designed in Canva, leveraging AI-assisted iterations to create a clean, professional look. Content structure was refined to highlight their services, publications, and expertise in M&A and reinsurance.',
        technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Headless UI', 'Canva', 'AI-assisted design'],
        outcomes: 'The redesign provided Butterfly Financial Consultants with a faster, fully responsive website and a professional visual identity that reinforces their thought leadership. The refreshed branding and clearer service presentation improve client trust and support business development, while the modern stack ensures maintainability and performance for years to come.',
        image: '',
        website: 'https://www.jetiller.com/'
    },
    'case-study-tarot': {
        title: 'Tarot with Sybil',
        description: 'An interactive React-based tarot card app built as my code school capstone project, designed both as a learning milestone and as a promotional tool for a paranormal mystery manuscript by Denise Tiller.',
        problem: 'The manuscript needed a unique, immersive way to engage readers and build intrigue around its paranormal themes. At the same time, I wanted to showcase my newly acquired front-end engineering skills with a polished, real-world project.',
        solution: 'I developed a responsive web app in React that allows users to draw and flip tarot cards, styled to match the tone of the Sybil manuscript. The app served as both a portfolio project and a marketing tool, combining interactivity with narrative branding. It demonstrated my ability to translate creative concepts into functional, engaging digital products.',
        technologies: ['React', 'JavaScript', 'CSS', 'Surge'],
        outcomes: 'Tarot with Sybil strengthened my early portfolio, showcasing React proficiency and design sensibility. It also provided a unique promotional platform for the manuscript, drawing interest through its interactive tarot experience and supporting the broader storytelling goals.',
        image: Tarot,
        website: 'http://tarot.lizthrilla.surge.sh/',

    }

  };