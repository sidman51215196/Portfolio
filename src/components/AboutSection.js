import React from 'react';
import bg_pic from '../images/bg_pic2.jpg';
import SchoolIcon from '@mui/icons-material/School';

const AboutSection = () => {
  return (
    <section id="about" className="text-black h-max sm:h-max flex items-center justify-center flex-col p-9 "
    style={{
      backgroundImage: `url(${bg_pic})`, // Use the imported image
      backgroundSize: 'cover', // Ensures the image covers the entire div
      backgroundPosition: 'center', // Centers the image
      backgroundRepeat: 'no-repeat', // Prevents repeating
    }}>
      <div className=" text-center bg-gradient-to-r from-blue-500 to-red-500 rounded-lg shadow-lg p-6 ">
        
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          About Me
        </h2>

        <p className=" text-lg sm:text-xl md:text-2xl px-4 sm:px-8 md:px-12">
        I’m Siddharth Manna, a final-year student at Sikkim Manipal Institute of Technology, pursuing a B.Tech in Computer Science Engineering. I’m passionate about web development and enjoy building creative solutions using technologies like React, Angular, and Tailwind CSS. I also have an interest in machine learning and have worked on projects related to Nepali Sign Language recognition. Apart from technology, I enjoy playing cricket, football, and chess, as well as reading books to explore new ideas.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-8 flex items-center justify-center">
        
          Education
          <SchoolIcon fontSize="large" className="text-black ml-1" />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-blue-200 bg-opacity-50 rounded-lg shadow-lg p-1 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">Class X</h3>
            <ul className="list-none text-center">
              <li className="mb-1">• Institute: Tashi Namgyal Academy, Gangtok</li>
              <li className="mb-1">• Board:  Indian Certificate of Secondary Education (ICSE)</li>
              <li className="mb-1">• Year of Passing: 2019</li>
              <li className="mb-1">• Percentage: 92.4%</li>
            </ul>
          </div>

          <div className="bg-green-100	 bg-opacity-25 rounded-lg shadow-lg p-1 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">Class XII</h3>
            <ul className="list-none text-center">
              <li className="mb-1">• Institute: Tashi Namgyal Academy, Gangtok</li>
              <li className="mb-1">• Board: Indian School Certificate (ISC)</li>
              <li className="mb-1">• Year of Passing: 2021</li>
              <li className="mb-1">• Percentage: 92.2%</li>
            </ul>
          </div>

          <div className="bg-red-200 bg-opacity-50 rounded-lg shadow-lg p-1 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">B. Tech. (Computer Science and Engineering)</h3>
            <ul className="list-none text-center">
            <li className="mb-1">• Institute: Sikkim Manipal Institute of Technology (SMIT), Majitar</li>
              <li className="mb-1">• Board: Sikkim Manipal University (SMU)</li>
              <li className="mb-1">• Year of Passing: 2025</li>
              <li className="mb-1">• CGPA: 8.01 (out of 10)</li>
            </ul>
          </div>
        </div>

        <div className="text-2xl my-6">
          Want to know more about me? <a href="https://drive.google.com/file/d/1NZajxjIgtTV1lx-tAOKaU_4fe6YuqqQF/view?usp=drivesdk" target="_blank" className="hover:text-blue-800 underline">Click here to view my Resume (CV)</a> 
        </div>
        
        
      </div>
      
    </section>
    
  );
};

export default AboutSection;