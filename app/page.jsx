import "../styles/global.css";
import React from "react";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max:md:hidden" />
        <span className="orange_gradient">AI Powerd Prompts</span>
      </h1>
      <p className="desc text-center">
        Next.js recently became the official React framework as outlined in
        React docs. In this course, you'll learn the most important Next.js
        concepts and how they fit into the React ecosystem. Finally, you'll put
        your skills to the test by building a modern full-stack Next 13
        application.
      </p>
    </section>
  );
};

export default Home;
