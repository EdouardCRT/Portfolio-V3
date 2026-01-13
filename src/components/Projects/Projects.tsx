import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Area',
      description: 'A web application Consisting in actions/reactions between services, just like the real application IFTT.',
      technologies: ['React', 'NodeJs/Express', 'Mongodb'],
    },
    {
      title: 'Dashboard',
      description: 'Web application meant to handle widgets. (Weather(OpenWeatherAPI), Discord, e-mails)',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'IOT Weather station',
      description: 'Homemade weather station using ESP32/8266 microcontroller with DHT11 module for temperature and humidity. I also used MQTT protocol to communicate with a web server. I also made a Mobile App to display the station informations',
      technologies: ['Javascript', 'NodeJs/Express'],
      githubUrl: 'https://github.com/EdouardCRT/IOT_weather_station_backend',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all hover:transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-900 text-blue-400 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
