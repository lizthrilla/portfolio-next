'use client'
import {ConferenceData, IConference} from '@/app/data/ResumeData'

import { EntryBody, EntryWrapper, SectionHeader, SectionWrapper,  } from '@/app/components/Resume/Index';

const ConferenceDisplay: React.FC<any> = ({conf}) => {
    return (
        <div className="text-soft text-l mb-2">
            {
                conf.url ? (
                    <h4>
                        <a className="hover:text-yellow" href={conf.url ? conf.url : ''}>
                            {conf.name} - {conf.date}
                        </a>
                    </h4>
                ) : 
                (<h4>
                    {conf.name} - {conf.date}
                </h4>)
            }
        </div>
    )
};

export default function Conferences() {

    return (
        <SectionWrapper>
            <SectionHeader title={'Talks'} />
            <EntryWrapper>
               {ConferenceData.map((conf:IConference, i:number) =>{
                return (
                    <div key={i}>
                        <h3 className="text-2xl text-blue font-medium">
                            {conf.title}
                        </h3>
                       {conf.conference1 ? (<ConferenceDisplay conf={conf.conference1} />) : null}
                       
                       {conf.conference2 ? (<ConferenceDisplay conf={conf.conference2} />) : null}
                        <EntryBody>
                            <p>{conf.summary}</p>
                        </EntryBody>
                    </div>
                )
               })}
            </EntryWrapper>
        </SectionWrapper>
    )
}