import React from "react";
import illustration from "./illustration.svg";
import "./Landing.scss";

const Landing = () => {
  return (
    <section className="landing-page">
      <div className="landing-page-wrapper container">
        <article className="hero1">
          <picture>
            <img src={illustration} alt="todo items inside folder" />
          </picture>
          <div className="hero1-readings">
            <h1 className="hero1-heading">
              Separate your Todo list in Folders
            </h1>
            <p className="hero1-desc">
              You can keep your list of items separate with folders
            </p>
            <a href="/auth/google" className="hero1-ctaBtn">
              Get Started
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Landing;
