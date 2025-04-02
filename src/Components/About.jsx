/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to a string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download an image you
 * can freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "Abstract tech-themed background";

/**
 * Short description that expands on your title on the Home component.
 */
const description =
  "I'm a BTech student specializing in software development, passionate about building scalable and user-friendly applications. I have experience in full-stack development and a strong foundation in UI/UX design.";

/**
 * List of some of the skills or technologies you work on, are learning,
 * passionate about, or enjoy.
 */
const skillsList = [
  "React.js & JavaScript",
  "Node.js & Express.js",
  "PostgreSQL & MySQL",
  "UI/UX Design",
  "Bootstrap & Responsive Design",
  "API Development & Integration",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I love solving real-world problems with code and designing intuitive user experiences. My goal is to build impactful applications that are both efficient and accessible to users worldwide.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
