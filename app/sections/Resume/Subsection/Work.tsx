import {JobsData, IJob} from '../../../data/Index';
import { EntryBody, EntryHeader, EntryTitle, EntryWrapper, SectionHeader, SectionWrapper,  } from '@/app/components/Resume/Index';


export default function Work() {
    return ( 
        <SectionWrapper>
            <SectionHeader title={'Work'} />
            <EntryWrapper>
                {JobsData.map((job:IJob, i:number) => {
                    return (
                        <div key={i}>
                            <EntryHeader>
                                <EntryTitle company={job.company} dates={job.dates} title={job.title} url={job.url} />
                            </EntryHeader>
                            <EntryBody>
                                <p>{job.description}</p>
                                <p className="pt-2">{job.highlights}</p>
                            </EntryBody>
                        </div>

                    );
                })}
            </EntryWrapper>
        </SectionWrapper>
)};
