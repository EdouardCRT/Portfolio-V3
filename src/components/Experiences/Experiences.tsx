import React from 'react';

interface Experiences {
  title: string;
  description: string;
  technologies: string[];
}

const Experiences: React.FC = () => {
  const experiences: Experiences[] = [
    {
      title: 'KLOCEL S.A.S : September - December 2020',
      description: 'Second year internship as an Analyst Developer in the supply chain domain. My first task was to implement a scanning software for a pallet scanner. I then was responsible for multiple changes within the LMXT software suite.',
      technologies: ['C', 'LMXT Suite', 'SQL'],
    },
    {
      title: 'FWA : March - July 2022',
      description: 'Third year internship as a Fullstack Developer. During this internship, i had to work on the finance app for Médecins Sans Frontière (MSF)',
      technologies: ['C#', '.NET Framework', 'JQuery'],
    },
    {
      title: 'OXYL Digital Makers : March - August 2024',
      description: 'End of study internship for my 5th and final year at Epitech Paris. During my time there, i had the opportunity to work on the learning application of the company as a FullStack developer',
      technologies: ['Javascript', 'ReactJs', 'Java', 'Hibernate', 'Spring Boot'],
    },
  ];

  return (
    <section id="experiences" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Professionnal experiences
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experiences, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all hover:transform hover:scale-105"
            >
              <h3 className="text-center text-2xl font-semibold mb-3">{experiences.title}</h3>
              <p className="text-gray-300 mb-4">{experiences.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {experiences.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-900 text-blue-400 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
