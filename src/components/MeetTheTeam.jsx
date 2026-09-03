import React from "react";
import { Arrow, SocialIcon } from "./Icons";
import { founder, coreTeam, developers } from "../data/team";

function Avatar({ initials, large = false, image }) {
  return (
    <div
      className={large ? "teamAvatar teamAvatarLarge" : "teamAvatar"}
      aria-hidden="true"
    >
      <div className="avatarGlow" />

      {image ? (
        <img
          src={image}
          alt=""
          className="teamAvatarImage"
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}
function SocialButtons() {
  return (
    <div className="teamSocials">
      <a href="#" aria-label="LinkedIn">
        <SocialIcon type="linkedin" />
      </a>
      <a href="#" aria-label="GitHub">
        <span className="githubMark">⌘</span>
      </a>
      <a href="mailto:hello@bananabrand.in" aria-label="Email">
        <span className="mailMark">✉</span>
      </a>
    </div>
  );
}

function TeamCard({ member }) { 
  return ( 
    <article className="teamCard"> 
      <Avatar 
        initials={member.initials} 
        image={member.image} 
      />
      <span className="teamRole">{member.role}</span>
      <h3>{member.name}</h3>
      <div className="teamRule" />
      {member.text && <p>{member.text}</p>}
      <SocialButtons />
    </article> 
  ); 
}

export default function MeetTheTeam() {
  return (
    <div className="teamPage">
      <section className="teamHero">
        <div className="teamHeroCopy">
          <span className="founderPill">
            {founder.name} — {founder.role}
          </span>
          <h1>
            Driving <span>ideas</span>
            <br />
            through creativity
            <br />
            and execution.
          </h1>
          <p>{founder.intro}</p>
          <div className="founderPoints">
            {founder.points.map((point, index) => (
              <div key={point}>
                <span className="pointIcon">
                  {index === 0 ? "↻" : index === 1 ? "▣" : "◆"}
                </span>
                <p>{point}</p>
              </div>
            ))}
          </div>
          <a className="primaryBtn" href="#team">
            Meet the team <Arrow />
          </a>
        </div>
        <div className="founderVisual">
  <div className="founderFrame">
    <Avatar initials="BB" large image={founder.image} />
    <div className="founderBadge">{founder.badge}</div>
  </div>
</div>
      </section>

      <section className="teamIntro" id="team">
        <span className="eyebrow">THE PEOPLE BEHIND THE WORK</span>
        <h2>
          Meet the <span>Team</span>
        </h2>
        <p>
          Creative and technical minds working together to turn ideas into
          digital experiences.
        </p>
        <div className="coreTeamGrid">
          {coreTeam.map((member) => (
            <TeamCard member={member} key={member.name} />
          ))}
        </div>
      </section>

      {/* <section className="developersSection">
        <div className="developersHead">
          <span className="eyebrow">OUR EXTENDED TEAM</span>
          <h2>
            Undercover <span>Developers</span>
          </h2>
          <p>
            A wider group of builders supporting projects across design,
            development and delivery.
          </p>
        </div>
        <div className="developerGrid">
          {developers.map((member) => (
            <TeamCard member={member} key={member.name} />
          ))}
        </div>
      </section> */}

      <section className="teamCta">
        <div>
          <span className="eyebrow">WORK WITH US</span>
          <h2>
            Let's create something <span>great.</span>
          </h2>
          <p>
            Have a project, campaign or product idea? Tell us what you want to
            build.
          </p>
        </div>
        <a className="primaryBtn" href="/#callback">
          Start a Conversation <Arrow />
        </a>
      </section>
    </div>
  );
}
