import React from 'react';
import { CaseStudyCard } from '@/app/components/index';
import { CaseStudyBlurbData, ICaseStudyBlurb } from '@/app/data/index';

export default function CaseStudy() {
  return (
    <section id="case-study" className="w-full py-16 bg-gray-light text-gray-dark">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-dark mb-4">Case Studies</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Deep dives into my freelance projects and the problems they solved
          </p>
        </div>
        {/* add back after I finish jetiller case study "grid md:grid-cols-2 lg:grid-cols-3 gap-8" */}
        <div className="grid md:grid-cols-2 gap-8">
            {
                CaseStudyBlurbData.map((caseStudy: ICaseStudyBlurb, i: number) => (
                    <CaseStudyCard 
                      key={i} 
                      title={caseStudy.title} 
                      description={caseStudy.description} 
                      technologies={caseStudy.technologies}
                      slug={caseStudy.slug}
                    />
                ))
            }

        </div>
      </div>
    </section>
  );
}
