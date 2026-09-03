import React from "react";
import { Arrow, PlayIcon } from "./Icons";
import MarketingBackground from "./MarketingBackground";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="orb orbOne" />
      <div className="orb orbTwo" />
      <div className="heroText">
        <span className="eyebrow">CREATIVE • DIGITAL • GROWTH</span>
        <h1>
          We make brands <span>stand out.</span>
        </h1>
        <p>
          Content, marketing, websites and social media — all working together
          to help your business grow.
        </p>
        <div className="actions">
          <a className="primaryBtn" href="#callback">
            Start a Project <Arrow />
          </a>
          <a className="ghostBtn" href="#work">
            <PlayIcon /> See Our Work
          </a>
        </div>
        <div className="miniStats">
          <div>
            <b>04</b>
            <span>Core services</span>
          </div>
          <div>
            <b>01</b>
            <span>Creative partner</span>
          </div>
          <div>
            <b>∞</b>
            <span>Ideas delivered</span>
          </div>
        </div>
      </div>
      <div className="heroVisual">
        <MarketingBackground />
        <div className="floatCard">
          <b>+128%</b>
          <small>Growth potential</small>
        </div>
      </div>
    </section>
  );
}

export function Services({ services }) {
  return (
    <section className="services section" id="services">
      <div className="sectionHead">
        <span>WHAT WE DO</span>
        <h2>
          Everything your brand needs to <i>move forward.</i>
        </h2>
      </div>
      <div className="serviceGrid">
        {services.map((s) => (
          <article
  className="service"
  key={s.no}
  style={{ backgroundImage: `url(${s.image})` }}
>
  <div className="serviceOverlay"></div>

  <div className="serviceContent">
    <small>{s.no}</small>

    <div className="serviceIcon">{s.icon}</div>

    <h3>{s.title}</h3>

    <p>{s.text}</p>

    <a href="#callback">
      Explore <Arrow />
    </a>
  </div>
</article>
        ))}
      </div>
    </section>
  );
}

export function Why({ reasons }) {
  return (
    <section className="why" id="about">
      <div className="whyIntro">
        <span className="eyebrow">WHY BANANABRAND</span>
        <h2>
          Simple ideas. <span>Strong execution.</span>
        </h2>
        <p>
          Strategy, creativity and technology brought together into one focused
          team — without making the process complicated.
        </p>
      </div>
      <div className="whyGrid">
        {reasons.map((item, index) => (
          <div key={item}>
            <b>0{index + 1}</b>
            <h3>{item}</h3>
            <p>Clear work, practical decisions and measurable progress.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Work({ projects }) {
  return (
    <section className="work section" id="work">
      <div className="sectionHead">
        <span>SELECTED WORK</span>
        <h2>
          A few things we've <i>built.</i>
        </h2>
      </div>
      <div className="workGrid">
        {projects.map((item, index) => (
          <article className={`project p${index}`} key={item}>
            <div className="projectGlow" />
            <span>0{index + 1}</span>
            <h3>{item}</h3>
            <p>Creative direction · Digital · Growth</p>
            <Arrow />
          </article>
        ))}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="cta">
      <MarketingBackground className="ctaVisual" />
      <div>
        <span>HAVE AN IDEA?</span>
        <h2>
          Let's build something <i>worth noticing.</i>
        </h2>
        <p>
          Tell us what you're building. We'll turn the idea into a clear digital
          plan.
        </p>
      </div>
      <a className="primaryBtn" href="#callback">
        Request a Call Back <Arrow />
      </a>
    </section>
  );
}
