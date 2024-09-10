import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import {EducationData, EducationType} from './ResumeData';


export default function Education() {
    return ( 
        <div className="flex flex-col items-center md:flex-row md:items-start justify-center text-default">
            <div className="mx-20 text-2xl p-5 lg:pt-0">
                <h1 className="underline decoration-blue decoration-solid uppercase underline-offset-8"> Education</h1>
            </div>
            <div className="">
                {EducationData.map((ed:EducationType, i:number) => {
                    return (
                        <div key={i} className="pb-5">
                            <h3 className="text-2xl text-blue">{ed.school}</h3>
                            <h4 className="pb-5 text-soft">{ed.degree} - {ed.graduation}</h4>
                            <p className="pb-2">{ed.thesis}</p>
                        </div>

                    );
                })}
            </div>
         </div>
)}
