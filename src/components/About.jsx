import { useState, useEffect } from "react";

import "./About.css";

const About = () => {
  const [body, setBody] = useState([]);

  const getText = () => {
    fetch("/data/about.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setBody(jsonData.about);
      });
  };

  useEffect(() => getText(), []);

  const paragraphs = body.map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img className="about-image" src="images/portrait.jpg" alt="" />
        <div className="about-text">{paragraphs}</div>
      </div>
    </section>
  );
};

export default About;
