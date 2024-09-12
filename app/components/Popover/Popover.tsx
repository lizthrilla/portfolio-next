'use client'
import Image from 'next/image'
import {FaLink, FaGithub} from "react-icons/fa";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { IPortfolio } from '@/app/data/PortfolioData'

const PopOverComponent: React.FC<IPortfolio> = ({appTitle, description, githubLink, imgSrc, link}) => {
    return (
        <div className="grid-span-1 m-2">
            <Popover className="relative flex flex-col items-center">
                <PopoverButton>{appTitle}</PopoverButton>
                <Image src={imgSrc} className="w-60 h-60 static" alt={appTitle}/>
                <PopoverPanel className="absolute top-7 flex flex-col bg-gray-dark/85 text-light w-60 h-60 p-1 text-m leading-1">
                    <p className="pb-3">{description}</p>
                    <a href={githubLink} title={`Github link to ${appTitle}`} target="_blank" className="flex flex-row items-center justify-start pb-2">
                       <FaGithub /> Github
                    </a>
                    {
                        link ? 
                        <a href={link} title={appTitle} target="_blank" className="flex flex-row items-center justify-start">
                            <FaLink /> Project Link
                        </a>
                        : null
                    }
                </PopoverPanel>
            </Popover>
        </div>
    )
}
export default PopOverComponent