import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaYahoo } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col w-full min-h-screen px-4 sm:px-6 lg:px-12 py-12">
      
      {/* Title */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#222121ea] font-sans">
          CONTACT ME
        </h2>
        <span className="w-12 mt-4 h-1.5 rounded-full bg-[#4a19bb]"></span>
      </div>

      {/* Intro */}
      <p className="mt-6 text-center font-sans text-base sm:text-lg md:text-xl text-[#979797] max-w-3xl mx-auto">
        Have a question or want to work together? Fill out the form below or reach me via social links.
      </p>

      {/* Contact Form */}
      <div className="mt-12 max-w-3xl mx-auto w-full">
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#843ef3]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#843ef3]"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#843ef3]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#843ef3] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#6d2cd8] transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="mt-12 flex justify-center gap-6 text-2xl text-gray-800">
        <a href="https://www.instagram.com/nikesh_gautam1/" className="hover:text-[#843ef3] transition"><FaInstagram /></a>
        <a href="https://www.facebook.com/Nikesh.Gautam.np/" className="hover:text-[#843ef3] transition"><FaFacebook /></a>
        <a href="https://www.linkedin.com/in/nikesh-gautam-110018380/" className="hover:text-[#843ef3] transition"><FaLinkedin /></a>
        <a href="https://github.com/Nikesh00001" className="hover:text-[#843ef3] transition"><FaGithub /></a>
        <a href="#" className="hover:text-[#843ef3] transition"><FaYahoo /></a>
      </div>
    </section>
  )
}

export default Contact
