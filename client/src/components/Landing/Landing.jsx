import React from "react";
import illustration from "./illustration.svg";
import illustration2 from "./illustration-2.svg";
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
        <article className="hero2">
          <picture>
            <img src={illustration2} alt="todo items inside folder" />
          </picture>
          <div className="hero2-readings">
            <h1 className="hero2-heading">Access from anywhere</h1>
            <p className="hero2-desc">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Landing;
