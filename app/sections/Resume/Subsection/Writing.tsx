import {IWriting, WritingData} from '@/app/data/ResumeData';
import { EntryBody, EntryHeader, EntryTitle, EntryWrapper, SectionHeader, SectionWrapper,  } from '@/app/components/Resume/Index';


export default function Writing() {
    return ( 
        <SectionWrapper>
            <SectionHeader title={'Writing'} />
            <EntryWrapper>
                {WritingData.map((article:IWriting, i:number) => {
                    return (
                        <div key={i}>
                            <EntryHeader>
                                <EntryTitle company={article.publication} dates={article.date} title={article.title} url={article.url} />
                            </EntryHeader>
                            <EntryBody>
                                <p>{article.summary}</p>
                            </EntryBody>
                        </div>

                    );
                })}
            </EntryWrapper>
        </SectionWrapper>
)};
