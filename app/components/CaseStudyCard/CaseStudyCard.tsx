import React from 'react'
import Link from 'next/link'
import { ICaseStudyBlurb } from '../../data/Index'

export default function CaseStudyCard({ title, description, technologies, slug }: ICaseStudyBlurb) {   
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
        <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-dark mb-3">{title}</h3>
            <p className="text-gray-300 mb-4">
            {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">{tech}</span>
            ))}
            </div>
            <Link href={`/case_study/${slug}`} className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors text-center">
                Read Case Study
            </Link>
        </div>
    </div>
  )
}