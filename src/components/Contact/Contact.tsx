
const Contact: React.FC = () => {

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Get In Touch !
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Have an opportunity and want to collaborate? Feel free to reach out!
        </p>
        <div className="mt-12 flex justify-center gap-6">
          <a
            href="https://github.com/EdouardCRT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/edouard-courty/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:edouardcourty740@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
