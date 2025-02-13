import React from 'react';

const ProjectSection = () => {
  const projects = [
    {
      title: 'Trainee in Software Engineer at Alumnus Software Limited',
      description1:'• Gained practical experience in software engineering and working on real-world projects.',
      description2:'• Learned and applied industry-standard tools, frameworks, and coding best practices. ',
      description3:'• Worked alongside professionals which enhanced problem-solving and software development skills.',
      techStack: ['React','Node.js','PostgreSQL'],
      date:'Duration: February, 2025 to Present',
      certificateLink:'',
    },
    {
      title: 'Ex-Defense Personnel Management System at National Informatics Center',
      description1:
        '• Developed a system to manage ex-defense personnel data efficiently for the Rajya Sainik Board, Gangtok.',
      description2:
        '•  Designed and implemented a responsive user interface for seamless user experience.',
      description3: '• Utilised Angular for the front-end and Django for the back-end.',
      techStack: ['Angular', 'Django', 'PostgreSQL'],
      date: 'Duration: June, 2024 to July, 2024',
      certificateLink:'https://drive.google.com/file/d/13SozAqVrPiL7kyO8Pr1e_7F_wkxXhCBX/view?usp=sharing',
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
    {
      title: 'Khangchendzonga State University Website Development',
      description1:
        "• Designed and developed the front-end for Khangchendzonga State University's website using React and Tailwind CSS.",
      description2:'• Ensured cross-browser compatibility and improved loading speed.',
      description3:'• Managed version control using GitHub for efficient teamwork.',
      techStack: ['React', 'Tailwind CSS', 'JavaScript'],
      date: 'Duration: June, 2023 to July, 2023',
      certificateLink:'https://drive.google.com/file/d/1TtVe7rTS6V27cmjv0Lps4Unj4xFnmIkl/view?usp=sharing',
    },
    {
      title: 'Cyber Security from Cybersec Infotech in association with Teachnook',
      description1: '• Identified security issues and risks for developing mitigation strategies.',
      description2: '• Performed basic penetration testing, encryption, and decryption using Kali Linux.',
      description3: '• Analyzed vulnerabilities using tools like Nmap, Wireshark, and Burp and implemented security measures to enhance system protection. ',
      techStack: ['Cyber Security', 'Penetration Testing', 'Ethical Hacking'],
      date: 'Duration: August, 2022 to September, 2022',
      certificateLink:'https://drive.google.com/file/d/1UXsCh8KRF-8N9tOFbOE7OPODxfgjfyeT/view?usp=sharing',
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#0d1b2a] h-max sm:min-h-screen flex items-center justify-center py-12 px-6"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-xl md:text-6xl font-bold text-center mb-8 sm:mb-12 text-yellow-200">
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
              <div className="mt-4 flex justify-center ">
                {project.certificateLink ? (
                  <button
                    type="submit"
                    className="w-40 bg-yellow-400 text-black py-2 rounded-xl hover:bg-yellow-500 transition"
                    onClick={() => window.open(project.certificateLink, '_blank')}
                  >
                    View Certificate
                  </button>
                ) : (
                  <p className="text-red-500 text-sm">Certificate not available</p>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;