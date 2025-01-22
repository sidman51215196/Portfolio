import React from 'react';

const SkillsSection = () => {
  const skills = [
    {
      category: 'Programming Languages',
      skills: ['C', 'C++', 'Python', 'Java', 'JavaScript and TypeScript', 'SQL'],
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5">
          <path d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
        </svg>
      ),
    },
    {
      category: 'Web Development',
      skills: ['ReactJS', 'AngularJS', 'Tailwind CSS', 'Django', 'HTML & CSS', 'Bootstrap'],
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5"><path d="M0 256C0 209.4 12.5 165.6 34.3 127.1L144.1 318.3C166 357.5 207.9 384 256 384C270.3 384 283.1 381.7 296.8 377.4L220.5 509.6C95.9 492.3 0 385.3 0 256zM365.1 321.6C377.4 302.4 384 279.1 384 256C384 217.8 367.2 183.5 340.7 160H493.4C505.4 189.6 512 222.1 512 256C512 397.4 397.4 511.1 256 512L365.1 321.6zM477.8 128H256C193.1 128 142.3 172.1 130.5 230.7L54.2 98.5C101 38.5 174 0 256 0C350.8 0 433.5 51.5 477.8 128V128zM168 256C168 207.4 207.4 168 256 168C304.6 168 344 207.4 344 256C344 304.6 304.6 344 256 344C207.4 344 168 304.6 168 256z"/></svg>
      ),
    },
    {
      category: 'Machine Learning',
      skills: ['TensorFlow', 'Keras', 'Pandas', 'NumPy', 'Scikit-learn'],
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5"><path d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z"/></svg>
      ),
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git (Github)', 'PostgreSQL', 'Kali Linux'],
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5"><path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
      ),
    },
  ];

  return (
        <section id="skills" className="bg-[#0d1b2a] h-max md:h-max sm:h-max flex items-center justify-center py-12 px-6">
        <div className="container mx-auto">
                <h2 className="text-4xl md:text-6xl text-yellow-200 font-bold text-center mb-12">Skill Set</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skillCategory, index) => (

                        <div
                        key={index}
                        className="bg-yellow-100 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-200"
                        >
                        {/* Flex container for SVG and category text */}
                        <div className="flex items-center justify-center mb-4">
                        {skillCategory.svg}
                        <h3 className="text-2xl font-bold pl-2">{skillCategory.category}</h3>
                        </div>
                        <ul className="list-disc list-inside">
                        {skillCategory.skills.map((skill, i) => (
                        <li key={i} className="text-gray-700 text-lg mb-2">
                                {skill}
                        </li>
                        ))}
                        </ul>
                        </div>

                ))}
                </div>
        </div>
        </section>

      
  );
};

export default SkillsSection;