import React from 'react';

const ProjectSection2 = () => {
  const projects = [
    {
      title: 'Spam Detection Web App using Machine Learning',
      description1:
        '• Built a real-time Spam Classification Web App leveraging Naive Bayes for email and message classification.',
      description2:
        '• Integrated an interactive Streamlit interface enabling live user input and instant classification feedback.',
      description3:'• Deployed the model for seamless web access, ensuring real-time predictions and smooth user experience.',
      techStack: ['Python', 'Streamlit', 'Scikit-learn'],
      date: 'Duration: October, 2025',
      certificateLink:'https://github.com/sidman51215196/SpamDetactionTesting',
    },
    {
      title: 'Performance Analysis of ML Models for Nepali Sign Language (NSL) Gesture Recognition',
      description1:
        '• This is a mini project done from Sikkim Manipal Institute of Technology.',
      description2:
        '• Evaluates NSL consonant accuracy using CNN (SSD MobileNet) and LSTM, detailing training, testing, and challenges.',
      description3:'• The project Aims to enhance NSL recognition for improved accessibility.',
      techStack: ['Python', 'TensorFlow', 'Keras'],
      date: 'Duration: January, 2024 to April, 2024',
      certificateLink:'',
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#0d1b2a] h-max sm:min-h-screen flex items-center justify-center py-12 px-6"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-xl md:text-6xl font-bold text-center mb-8 sm:mb-12 text-yellow-200">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-yellow-100 rounded-lg shadow-lg p-4 sm:p-6 hover:bg-yellow-200 transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center justify-center border-b-2 border-blue-500">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">{project.description1}</p>
              <p className="text-sm sm:text-base text-gray-700 mb-2">{project.description2}</p>
              <p className="text-sm sm:text-base text-gray-700 mb-2">{project.description3}</p>
              <div className="mb-4">
                <h4 className="font-semibold">Tech Stack:</h4>
                <ul className="list-disc list-inside">
                  {project.techStack.map((tech, i) => (
                    <li key={i} className="text-gray-600 text-sm sm:text-base">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm sm:text-base text-gray-700 font-semibold">{project.date}</p>
              <div className="mt-4 flex justify-center ">
                {project.certificateLink ? (
                  <button
                    type="submit"
                    className="w-40 bg-yellow-400 text-black py-2 rounded-xl hover:bg-yellow-500 transition"
                    onClick={() => window.open(project.certificateLink, '_blank')}
                  >
                    GitHub Link
                  </button>
                ) : (
                  <p className="text-red-500 text-sm">Github Link not available</p>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection2;