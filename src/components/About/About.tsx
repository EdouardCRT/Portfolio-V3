import React from 'react';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiTailwindcss,
  SiGit
} from 'react-icons/si';
import { FaServer } from 'react-icons/fa';

const About: React.FC = () => {
  const skills = [
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'React', icon: SiReact },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'HTML/CSS', icon: SiHtml5 },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Git', icon: SiGit },
    { name: 'REST APIs', icon: FaServer },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About Me
        </h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-center text-2xl font-semibold mb-4 text-blue-400">Who I Am</h3>
            <p className="text-gray-300 mb-4">
              I'm a passionate web developer with expertise in building modern, scalable applications
              using TypeScript and React. I love turning complex problems into simple, beautiful solutions.
            </p>
            <p className="text-gray-300">
              With a strong foundation in JavaScript and a focus on best practices, I create
              applications that are not only functional but also maintainable and performant.
            </p>
          </div>
          <div>
            <h3 className="text-center text-2xl font-semibold mb-4 text-blue-400">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm hover:border-blue-500 transition-colors flex items-center gap-2"
                  >
                    <Icon className="text-lg" />
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
