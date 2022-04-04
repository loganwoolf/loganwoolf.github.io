import { useState, useEffect } from "react";

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

  const paragraphs = body.map((paragraph) => <p>{paragraph}</p>);

  return (
    <section id="about">
      <h2>About Me</h2>
      {paragraphs}
    </section>
  );
};

export default About;
