import React from 'react';

const WorkshopSection = () => {
  const workshops = [
    {
      title: 'Generative AI: Introduction and Applications',
      description1: '• Explored the fundamentals and real-world applications of Generative AI.',
      description2: '• Understood how AI models like GPT and diffusion models generate content.',
      description3: '• Gained insights into AI ethics, use cases, and industry trends.',
      instructors: ['IBM (via Coursera)'],
      date: 'Date of Completion: 4th November, 2025',
      certificateLink: 'https://coursera.org/verify/7RN0DIV7GYDB',
    },
    {
      title: 'Generative AI: Prompt Engineering Basics',
      description1: '• Learned key techniques for effective prompt creation and refinement.',
      description2: '• Understood prompt engineering strategies for text, image, and code generation.',
      description3: '• Applied practical methods to optimize AI responses and workflow efficiency.',
      instructors: ['IBM (via Coursera)'],
      date: 'Date of Completion: 11th November, 2025',
      certificateLink: 'https://coursera.org/verify/MQN1H9YMHESI',
    },
    {
      title: 'One Day Workshop on Mern Stack Development',
      description1:'• Gained insights into MERN stack development and its applications.',
      description2:'• Learned about MongoDB, Express.js, React, and Node.js for full-stack development.',
      description3:'• Engaged in hands-on projects to enhance practical skills in web development.',
      instructors: ['Desun Technology Pvt Ltd. (Kolkata)'],
      date:'Date of Completion: 23rd October, 2024',
      certificateLink:'https://drive.google.com/file/d/1btbhjDHcbXmvaWXYIQ4D0Ww7A4M0buNH/view?usp=sharing',
    },
    {
      title: 'The Complete Java Script Course : From Zero to Expert',
      description1:'• Learned variables, functions, objects, and ES6+ concepts for modern development.',
      description2:'• Gained expertise in promises, async/await, and API handling.',
      description3:'• Applied knowledge through hands-on projects, enhancing problem-solving and coding skills.',
      instructors: ['Sara Academy (Udemy)'],
      date:'Date of Completion: August 17th, 2024 (3.5 total hours)',
      certificateLink:'https://drive.google.com/file/d/1-nJOK35jUkBEcGVasDSt9DIG_1h959e6/view?usp=sharing',
    },
    {
      title: 'Unravelling Cyberattacks & Pursuing a Career in Cybersecurity',
      description1:'• Gained insights into various cyberattacks, vulnerabilities, and defense mechanisms.',
      description2:'•  Learned penetration testing, encryption, and network security fundamentals. ',
      description3:'• Explored roles, certifications, and skills needed for a successful cybersecurity career.',
      instructors: ['Charu Pelnekar (CSC Council)'],
      date:'Date : June 17th, 2024',
      certificateLink:'https://drive.google.com/file/d/1qM4oz85i_ExIHvpq66hFQ0X5N02WyUvX/view?usp=sharing',
    },
    {
      title: 'Machine Intelligence & Data Analytics',
      description1:'• Gained insights into advanced AI and data analytics techniques.',
      description2:'• Engaged with experts from SMIT and ISI Kolkata, enhancing knowledge in machine intelligence. ',
      description3:'• Learned about the latest trends and research in AI, data science, and innovation.',
      instructors: ['Experts from SMIT and ISI Kolkata'],
      date:'Date of Completion: June 19th to June 21st, 2023',
      certificateLink:'https://drive.google.com/file/d/1wYtSLeSwFTNLstyF-o5aycsS9ESe_lEe/view?usp=sharing',
    },
    {
      title: 'React - The Complete Guide 2023 (incl. React Router & Redux)',
      description1:'• Gained expertise in components, props, state, and hooks for dynamic UI development.',
      description2:'• Learned efficient navigation with React Router and state management with Redux. ',
      description3:'• Applied concepts through hands-on projects, improving problem-solving and development skills.',
      instructors: ['Maximilian Schwarzmüller (Udemy)'],
      date:'Date of Completion: July 29th, 2023 (51 total hours)',
      certificateLink:'https://drive.google.com/file/d/1-hoG5PtPNo5kn9ySgaqyOBR9j2e5575T/view?usp=sharing',
    },
    {
      title: 'Cyber Security with Teachnook',
      description1:'• Learned key cybersecurity concepts, including threat analysis, risk management, and ethical hacking.',
      description2:'• Explored encryption, penetration testing, and network security techniques. ',
      description3:'• Developed practical cybersecurity skills essential for real-world applications and career growth.',
      instructors: ['Teachnook'],
      date:'Date of Completion: August 1st September 30th, 2022',
      certificateLink:'https://drive.google.com/file/d/1DDLI8Ll6WAcvYmmXUxgtDN4f4rVpUbh0/view?usp=sharing',
    },
  ];

  return (
    <section
      id="workshops"
      className="bg-[#0d1b2a] h-max sm:min-h-screen flex items-center justify-center py-12 px-6"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-xl md:text-6xl font-bold text-center mb-8 sm:mb-12 text-yellow-200">
          Courses and Workshops Attended
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {workshops.map((project, index) => (
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
                <h4 className="font-semibold">Instructors/Institute:</h4>
                <ul className="list-disc list-inside">
                  {project.instructors.map((tech, i) => (
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

export default WorkshopSection;