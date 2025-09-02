import React from 'react';
import { Footer } from '../../components/index';  
import Link from 'next/link';
import { CaseStudies } from '../../data/Index';

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = CaseStudies[params.slug as keyof typeof CaseStudies];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gray-light text-gray-dark">
        <div className="pt-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <p className="text-gray-300 mb-8">The case study you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-light text-gray-dark relative">
      {/* <Navbar /> */}
      
      <main className="pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="group inline-flex items-center text-blue-400 group-hover:text-blue-300 mb-8 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>

          {/* Case Study Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6">{caseStudy.title}</h1>
            <p className="text-xl text-gray-300 mb-6">{caseStudy.description}</p>
            <Link href={caseStudy.website} className="text-xl text-blue-400 hover:!text-blue-300 mb-8">Visit the website</Link>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              {caseStudy.technologies.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-gray-700 text-white text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Content */}
          <div className="space-y-12">
            {/* Problem Section */}
            <section>
              <h2 className="text-3xl font-semibold mb-4 text-blue-400">The Problem</h2>
              <p className="text-lg text-gray-300 leading-relaxed">{caseStudy.problem}</p>
            </section>

            {/* Solution Section */}
            <section>
              <h2 className="text-3xl font-semibold mb-4 text-green-400">The Solution</h2>
              <p className="text-lg text-gray-300 leading-relaxed">{caseStudy.solution}</p>
            </section>

            {/* Outcomes Section */}
            <section>
              <h2 className="text-3xl font-semibold mb-4 text-purple-400">Outcomes</h2>
              <p className="text-lg text-gray-300 leading-relaxed">{caseStudy.outcomes}</p>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-4">Interested in working together?</h3>
            <p className="text-gray-300 mb-6">Let&apos;s discuss how I can help with your next project.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
