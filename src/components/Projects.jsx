import React from 'react'

const Projects = () => {
  const demoProjects = [
    {
      title: "Library Management System",
      description:
        "A full-stack web app to manage books, students, and issue/return records. Built with React, FastAPI, and MongoDB.",
      tech: ["React", "FastAPI", "MongoDB", "Tailwind"],
      link: "#",
    },
    {
      title: "Restaurant Management System",
      description:
        "A complete restaurant management system with role-based access, menu management, and order tracking. Built using Laravel, Bootstrap, and MySQL.",
      tech: ["Laravel", "Bootstrap", "MySQL"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing skills, projects, and contact info. Fully responsive using React and Tailwind.",
      tech: ["React", "Tailwind", "Vite"],
      link: "#",
    },
    {
      title: "Note Management App",
      description:
        "A simple note-taking app with authentication and CRUD features. Integrated with Firebase for auth.",
      tech: ["React", "Firebase", "Tailwind"],
      link: "#",
    },
    {
      title: "E-Commerce Demo",
      description:
        "Frontend e-commerce demo with product listing, cart, and checkout page.",
      tech: ["React", "Tailwind", "FakeStore API"],
      link: "#",
    },
    {
      title: "Netflix Clone",
      description:
        "A Netflix-inspired streaming platform clone featuring movie browsing, categories, and user authentication. Styled with Tailwind and powered by TMDB API.",
      tech: ["React", "Firebase", "Tailwind", "TMDB API"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="flex flex-col w-full min-h-screen px-4 sm:px-6 lg:px-12 py-12">
      
      {/* Title */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#222121ea] font-sans">
          PROJECTS
        </h2>
        <span className="w-12 mt-4 h-1.5 rounded-full bg-[#4a19bb]"></span>
      </div>

      {/* Intro */}
      <p className="mt-6 text-center font-sans text-base sm:text-lg md:text-xl text-[#979797] max-w-3xl mx-auto">
        Here are some of the projects I’ve worked on recently. Each one reflects my learning and growth 
        in web development. More projects are on the way!
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {demoProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 font-serif">
                {project.title}
              </h3>
              <p className="mt-3 text-gray-600 text-base sm:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-sm bg-[#eee] px-3 py-1 rounded-full font-medium text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Link button */}
            <a
              href={project.link}
              className="mt-6 inline-block text-center bg-[#843ef3] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#6d2cd8] transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
