import { EntryBody, EntryHeader, EntryTitle, EntryWrapper, SectionHeader, SectionWrapper,  } from '@/app/components/Resume/Index';
import {EducationData, IEducation} from '@/app/data/ResumeData';


export default function Education() {
    return ( 
        <SectionWrapper>
            <SectionHeader title={'Education'} />
            <EntryWrapper>
                {EducationData.map((ed:IEducation, i:number) => {
                    return (
                        <div key={i}>
                            <EntryHeader>
                                <EntryTitle company={ed.school} dates={ed.graduation} title={ed.degree} />
                            </EntryHeader>
                            <EntryBody>
                                <p>{ed.thesis}</p>
                            </EntryBody>
                        </div>

                    );
                })}
            </EntryWrapper>
         </SectionWrapper>
)};
