import React from 'react';
import profilePic from '../images/profile_pic.jpg';
import bg_pic from '../images/bg_pic.jpg';

const IntroductionSection = () => {
  return (
    <section id="introduction" className=" text-black h-max sm:h-max flex items-center justify-center p-10"
    style={{
      backgroundImage: `url(${bg_pic})`, // Use the imported image
      backgroundSize: 'cover', // Ensures the image covers the entire div
      backgroundPosition: 'center', // Centers the image
      backgroundRepeat: 'no-repeat', // Prevents repeating
    }}>
      
      <div className="w-full text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-10 ">

      <img
          src={profilePic}  // Replace with the path to your image
          alt="Siddharth Manna"
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover border-2 border-black mb-4"

        /><br></br>
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">Hi there, I'm Siddharth Manna</h1>

        <p className="mt-4 text-xl sm:text-xl md:text-2xl px-6 sm:px-8 md:px-12">An enthusiastic programmer 🤓 with an insatiable appetite for learning. <br></br><br></br>Challenges fuel my passion, and I thrive on pushing my limits to achieve new heights.<br></br><br></br> Whether it's coding or exploring new horizons, I'm always eager to embrace the opportunities that come my way.</p>
        
        

      </div>
    </section>
  );
};

export default IntroductionSection;