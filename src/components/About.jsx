import React from 'react'
import Skill from './Skill'

const About = () => {
  return (
    <section id="about" className="flex flex-col w-full min-h-screen px-4 sm:px-6 lg:px-12 py-12">
      
      {/* Title */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#222121ea] font-sans">
          ABOUT ME
        </h2>
        <span className="w-12 mt-4 h-1.5 rounded-full bg-[#4a19bb]"></span>
      </div>

      {/* Description */}
      <p className="mt-6 text-center font-sans text-base sm:text-lg md:text-xl text-[#979797] max-w-3xl mx-auto">
        Here you will find more information about me, what I do, and my current skills 
        mostly in terms of programming and technology.
      </p>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto">
        
        {/* Left Column - About */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif">
            Get to know me!
          </h2>
          <article className="mt-4 text-gray-600 font-sans font-medium text-base sm:text-lg md:text-xl leading-relaxed">
            I’m a frontend-focused web developer who loves building clean, responsive,
            and user-friendly web applications with React and Tailwind CSS. Along the way,
            I’ve also worked with MySQL, explored backend tools like FastAPI and MongoDB, 
            and picked up a bit of Laravel.
            <br /><br />
            Through the projects I’ve built, I’ve learned how design, frontend, and backend 
            all connect to create complete and meaningful solutions. I consider myself a 
            quick learner, a problem solver, and someone who enjoys working in a team to 
            bring ideas to life.
            <br /><br />
            I enjoy experimenting with new technologies, sharing what I learn with the 
            developer community, and constantly improving my skills. I’m always open to 
            opportunities where I can contribute, grow, and build digital experiences 
            that make an impact.
          </article>
        </div>

        {/* Right Column - Skills */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif">
            My Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            <Skill skill="HTML" />
            <Skill skill="CSS" />
            <Skill skill="JavaScript" />
            <Skill skill="React" />
            <Skill skill="TailwindCSS" />
            <Skill skill="Bootstrap" />
            <Skill skill="FastAPI" />
            <Skill skill="MySQL" />
            <Skill skill="MongoDB" />
            <Skill skill="PHP" />
            <Skill skill="Laravel" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
