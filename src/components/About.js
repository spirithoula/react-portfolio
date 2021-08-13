import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, my name is Alex Harrington.
          </h1>
          <p className="mb-8 leading-relaxed">
            Hi welcome to my page! 
            This is a portfolio made to present all the projects and apps I have worked on. 
            I am currently enrolled in the Full Stack Bootcamp through the University of Kansas. 
            My graduation date is August 26th, 2021. 
            Go to the contact page to get in touch with me!
          </p>
          <div>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Here are some examples of my work.
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="./coding.svg" />
        </div>
      </div>
    </section>
  )};