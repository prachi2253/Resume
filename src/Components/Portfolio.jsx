/**
 * Portfolio component
 *
 * Highlights some of your creations. These can be designs, websites,
 * open source contributions, articles you've written, and more.
 *
 * This is a great area for you to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to a string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is an updated list to reflect projects from your resume.
 */
const projectList = [
  {
    title: "Book Notes",
    description:
      "A digital application that allows users to create, organize, and search personal book notes with advanced tagging and filtering.",
      url:
      "https://book-2-nx8i.onrender.com/",
  },
  {
    title: "Carbon Footprint Analysis",
    description:
      "A data-driven application that analyzes user activity to estimate carbon footprint and provide recommendations for sustainability.",
      url:
      "https://ieee-frontend-seven.vercel.app/",
  },
  {
    title: "Restaurant Management System(Ongoing)",
    description:
      "A dynamic system built with React.js, Node.js (Express), and PostgreSQL, featuring customer and admin modules for order tracking and report generation.",
    
  },
  {
    title: "News Fetching Application(Ongoing)",
    description:
      "A React-based project that fetches and displays news dynamically using an API, showcasing modern UI/UX practices.",
  },
  {
    title: "Core Data Structure: BitArray in Python(Ongoing)",
    description:
      "Working on implementing an optimized BitArray data structure in Python, focusing on memory efficiency and bitwise operations.",
  },
  {
    title: "Accident Detection System",
    description:
      "An IoT-based system integrated with machine learning models to detect accidents in real-time and alert emergency services.",
  },
  
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;