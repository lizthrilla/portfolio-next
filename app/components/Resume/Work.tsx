import {JobsData, IJobType} from './ResumeData';


export default function Work() {
    return ( 
        <div className="grid md:grid-cols-10 md:gap-5 text-default">
            <div className="text-2xl md:col-span-2">
                <h1 className=" underline decoration-blue decoration-solid uppercase underline-offset-8">
                    Work
                </h1>
            </div>
            <div className="md:col-span-8">
                {JobsData.map((job:IJobType, i:number) => {
                    return (
                        <div key={i} className="pb-5">
                            <h3 className="text-2xl"><a href={job.companyWeb} className="text-blue font-medium">{job.company}</a></h3>
                            <h4 className="">{job.position}</h4>
                            <h4 className="pb-5 text-soft">{job.dates}</h4>
                            <p className="pb-2">{job.jobDescription}</p>
                            <p className="pb-2">{job.highlights}</p>
                        </div>

                    );
                })}
            </div>
         </div>
)}
