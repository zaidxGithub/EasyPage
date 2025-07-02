import React from "react";
import mypic from'../assets/myImg.png';

const AboutSectionNavbar= () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12 text-gray-800  ">
      
      {/* 🔹 About Developer */}
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center gap-4">

        <div className="w-30 sm:h-30 sm:w-55 rounded-full overflow-hidden border-4 border-black-300 shadow-md">
          <img
            src={mypic}
            alt="Developer"
            className="object-cover w-full h-full"
          />
        </div>



        <div className="text-md leading-relaxed">

          <h2 className="text-1xl sm:text-3xl font-bold mb-2">About the Developer</h2>
          <p className="text-s sm:text-lg leading-relaxed  ">
             Hello! I'm <span className="font-semibold">Mohammad Zaid</span>, a 3rd-year B.Tech CSE student at Integral University and a passionate self-taught web developer. I specialize in building user-friendly tools using React and Tailwind CSS.
          </p>
        </div>
      </div>

      {/* 🔹 About This App */}
      <div className="bg-white shadow-lg rounded-xl text-md p-6">
        <h2 className="text-1xl sm:text-3xl font-bold mb-2">About This App</h2>
        <p className="text-s sm:text-lg leading-relaxed">
          <span className="font-semibold">Easy Page</span> is a front page generator tool for CSE assignments and lab reports. 
          Built using React and Tailwind CSS, it allows students to quickly generate assignment covers and lab report templates 
          with styling similar to official formats.
        </p>
      </div>

      {/* 🔹 Disclaimer */}
      <div className="bg-white border-l-4 border-red-500 rounded-xl p-6 mb-20 text-md">
        <h2 className="sm:text-3xl font-bold mb-2">Developer's Note</h2>
        <p className="sm:text-lg text-s text-red-500 leading-relaxed">
          This app is currently under optimization for mobile devices. For the best experience, please use it on a desktop browser.
          Please note that the cover page templates are custom-built and may slightly differ in design from official college formats. 
          If you encounter any bugs or layout issues, feel free to reach out and report them to me directly.
        </p>
      </div>
      
    </div>
  );
};

export default AboutSectionNavbar;