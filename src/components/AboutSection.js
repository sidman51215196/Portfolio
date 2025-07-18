import SchoolIcon from "@mui/icons-material/School";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="text-black h-max sm:min-h-screen flex items-center justify-center flex-col p-9 bg-[#0d1b2a]"
      
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-8 text-yellow-200">About Me</h2>

      <div className="text-center bg-yellow-100 rounded-lg shadow-lg p-6 ">

        <p className=" text-base sm:text-xl md:text-2xl px-4 sm:px-8 md:px-12">
          I’m Siddharth Manna, a final-year student at Sikkim Manipal Institute
          of Technology, pursuing a B.Tech in Computer Science Engineering. I’m
          passionate about web development and enjoy building creative solutions
          using technologies like React, Angular, and Tailwind CSS. I also have
          an interest in machine learning and have worked on projects related to
          Nepali Sign Language recognition. Apart from technology, I enjoy
          playing cricket, football, and chess, as well as reading books to
          explore new ideas.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-8 flex items-center justify-center underline">
          Education
          <SchoolIcon fontSize="large" className="text-black ml-1" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-yellow-400 bg-opacity-50 rounded-lg shadow-2xl p-1 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">
              Class X
            </h3>
            <ul className="list-none text-center">
              <li className="mb-1">
                • Institute: Tashi Namgyal Academy, Gangtok
              </li>
              <li className="mb-1">
                • Board: Indian Certificate of Secondary Education (ICSE)
              </li>
              <li className="mb-1">• Year of Passing: 2019</li>
              <li className="mb-1">• Percentage: 92.4%</li>
            </ul>
          </div>

          <div className="bg-yellow-400 bg-opacity-50 rounded-lg shadow-2xl p-1 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">
              Class XII
            </h3>
            <ul className="list-none text-center">
              <li className="mb-1">
                • Institute: Tashi Namgyal Academy, Gangtok
              </li>
              <li className="mb-1">• Board: Indian School Certificate (ISC)</li>
              <li className="mb-1">• Year of Passing: 2021</li>
              <li className="mb-1">• Percentage: 92.2%</li>
            </ul>
          </div>

          <div className="bg-yellow-400 bg-opacity-50 rounded-lg shadow-2xl p-1 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">
              B. Tech. (CSE)
            </h3>
            <ul className="list-none text-center">
              <li className="mb-1">
                • Institute: Sikkim Manipal Institute of Technology (SMIT),
                Majitar
              </li>
              <li className="mb-1">• Board: Sikkim Manipal University (SMU)</li>
              <li className="mb-1">• Year of Passing: 2025</li>
              <li className="mb-1">• CGPA: 8.01 (out of 10)</li>
            </ul>
          </div>
        </div>

        <div className="text-center my-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Want to know more about me?
          </h2>
          <a
            href="https://drive.google.com/file/d/1cMRuzBXGYoq-RNSBhuj1lVjCkd3MLw_n/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            View My Resume (CV)
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
