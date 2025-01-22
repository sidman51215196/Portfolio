import React from 'react';

const ProjectSection = () => {
  const projects = [
    {
      title: 'Ex-Defense Personnel Management System',
      description1:
        '• Developed a system to manage ex-defense personnel data efficiently for the Rajya Sainik Board, Gangtok.',
      description2:
        '• Worked primarily as a front-end developer, focusing on creating a user-friendly interface and also contributed in back-end development.',
      description3: '• Utilised Angular for the front-end and Django for the back-end.',
      techStack: ['Angular', 'Django', 'PostgreSQL'],
      date: 'Duration: June, 2024 to July, 2024',
    },
    {
      title: 'Performance Analysis of ML Models',
      description1:
        '• This is a mini project done from Sikkim Manipal Institute of Technology.',
      description2:
        '• This project evaluates NSL consonant accuracy using machine learning models like CNN model using SSD MobileNet and LSTM with varying layers detailing training, testing, challenges, and promising progress for subsequent phases and model refinement.',
      techStack: ['Python', 'TensorFlow', 'Keras'],
      date: 'Duration: January, 2024 to April, 2024',
    },
    {
      title: 'Khangchendzonga State University Website Development',
      description1:
        "Designed and developed the front-end for Khangchendzonga State University's website using React and Tailwind CSS.",
      techStack: ['React', 'Tailwind CSS', 'JavaScript'],
      date: 'Duration: June, 2023 to July, 2023',
    },
    {
      title: 'Cyber Security from Cybersec Infotech in association with Teachnook',
      description1: '• Identified security issues and risks for developing mitigation strategies.',
      description2: '• Performed basic penetration testing, encryption, and decryption using Kali Linux.',
      techStack: ['Cyber Security', 'Penetration Testing', 'Ethical Hacking'],
      date: 'Duration: August, 2022 to September, 2022',
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#0d1b2a] h-max sm:min-h-screen flex items-center justify-center py-12 px-6"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-8 sm:mb-12 text-yellow-200">
          Internships and Projects
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;