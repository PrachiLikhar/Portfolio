// import React from "react";
// import { Typewriter } from "react-simple-typewriter";

// const Hero = () => {
//   return (
//     <section
//       className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 py-20 overflow-hidden"
//       id="home"
//     >
//       {/* Hero Content */}
//       <div className="relative z-10 text-center max-w-2xl">
//         <div className="text-6xl mb-4">🧑🏻‍💻</div>

//         <div className="inline-block px-4 py-1 text-sm bg-white/10 border border-white/20 rounded-full backdrop-blur-md mb-6">
//           <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping-slow"></span>
//           Open to Work
//         </div>

//         {/* Heading */}
//         <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
//           Crafting Unique & Engaging <br /> Digital Experiences
//         </h1>
//         <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
//           I am{" "}
//           <span className="text-purple-400">
//             <Typewriter
//               words={[
//                 "Prachi Likhar",
//                 "a Web Developer",
//                 "a Designer",
//                 "a Dreamer",
//               ]}
//               loop={true}
//               cursor
//               cursorStyle="|"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1000}
//             />
//           </span>
//         </h1>

//         <p className="text-gray-400 mb-8 text-lg">
//           I design and develop interactive, high-performance web apps. Let’s
//           build something amazing.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <a
//             href="#projects"
//             className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-full backdrop-blur-md hover:bg-white/20 transition-all"
//           >
//             💼 Projects
//           </a>
//           <a
//             href="#contact"
//             className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-full hover:opacity-90 transition-all"
//           >
//             📬 Let’s Connect
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 py-20 overflow-hidden"
      id="home"
    >
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <div className="text-6xl mb-4">👩🏻‍💻</div>

        <div className="inline-block px-4 py-1 text-sm bg-white/10 border border-white/20 rounded-full backdrop-blur-md mb-6">
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping-slow"></span>
          Open to Work
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          Let’s Build Future-Ready <br />
          Web Applications Together
        </h1>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
          I am{" "}
          <span className="text-purple-400">
            <Typewriter
              words={[
                "Prachi Likhar",
                "a Full Stack Developer",
                "an HTML/CSS Expert",
                "Java  Developer",
                "JavaScript Developer",
                "MERN Stack Developer",
                "Problem Solver",
                "Quick Learner",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <p className="text-gray-400 mb-8 text-lg">
          I design and develop responsive web apps using modern technologies.
          Always ready to build impactful and scalable solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-full backdrop-blur-md hover:bg-white/20 transition-all"
          >
            💼 Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-full hover:opacity-90 transition-all"
          >
            📬 Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
