import React, { useState } from 'react'
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaYahoo } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // handle change for inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailjs);
    emailjs.send(
      "service_565m1l8",        // ✅ Replace with your Service ID
      "template_c8f4d1u",        // ✅ Replace with your Template ID
      formData,
      "XRQ5BjHJILfIGNIuT"        // ✅ Replace with your Public Key from EmailJS
    )
    .then(
      (result) => {
        console.log(" Message sent:", result.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // reset form
      },
      (error) => {
        console.log("Error:", error.text);
        alert("Something went wrong, please try again.");
      }
    );
  };

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
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#843ef3]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#843ef3]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
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

export default Contact;
