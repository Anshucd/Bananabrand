import React from "react";
import Logo from "./Logo";
import { MenuIcon, CloseIcon, SocialIcon } from "./Icons";
import { navItems, contact } from "../data/content";

export default function Navbar({ open, setOpen, path, navigate }) {
  const close = () => setOpen(false);
  const go = (href) => {
    if (href.startsWith("/")) navigate(href);
    else close();
  };
  const activeFor = (item) =>
    (item.label === "Meet The Team" && path === "/meet-the-team") ||
    (item.label === "Home" && path === "/");

  return (
    <header className="siteHeader">
      <div className="topInfoBar">
        <div className="topInfoLeft">
          <a href={`mailto:${contact.email}`}>
            <span className="topIcon">✉</span>
            {contact.email}
          </a>
          <span className="topDivider" />
          <a href={contact.phoneHref}>
            <span className="topIcon">☎</span>
            {contact.phone}
          </a>
          <span className="topDivider" />
          <a href={contact.addressHref}>
            <span className="topIcon">⌖</span>
            {contact.address}
          </a>
        </div>
        <div className="topSocial">
          <a href={contact.social.instagram} aria-label="Instagram">
            <SocialIcon type="instagram" />
          </a>
          <a href={contact.social.facebook} aria-label="Facebook">
            <SocialIcon type="facebook" />
          </a>
          <a href={contact.social.linkedin} aria-label="LinkedIn">
            <SocialIcon type="linkedin" />
          </a>
        </div>
      </div>

      <div className="nav">
        <a
          className="desktopLogo"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            go("/");
          }}
          aria-label="BananaBrand home"
        >
          <Logo />
        </a>
        <nav className={open ? "navLinks open" : "navLinks"}>
          <div className="mobileDrawerTop">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                go("/");
              }}
              aria-label="BananaBrand home"
            >
              <Logo />
            </a>
            <button
              className="drawerClose"
              onClick={close}
              aria-label="Close navigation"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="drawerNavItems">
            {navItems.map((item) => {
              const href = item.href;
              return (
                <a
                  className={activeFor(item) ? "active" : ""}
                  key={item.label}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    go(href);
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="mobileContact">
            <a href={`mailto:${contact.email}`}>
              <span className="contactIcon">✉</span>
              <span>{contact.email}</span>
            </a>
            <a href={contact.phoneHref}>
              <span className="contactIcon">☎</span>
              <span>{contact.phone}</span>
            </a>
            <a href={contact.addressHref}>
              <span className="contactIcon">⌖</span>
              <span>{contact.address}</span>
            </a>
          </div>
          <div className="mobileSocial">
            <span>Follow us</span>
            <div>
              <a href={contact.social.instagram} aria-label="Instagram">
                <SocialIcon type="instagram" />
              </a>
              <a href={contact.social.facebook} aria-label="Facebook">
                <SocialIcon type="facebook" />
              </a>
              <a href={contact.social.linkedin} aria-label="LinkedIn">
                <SocialIcon type="linkedin" />
              </a>
            </div>
          </div>
        </nav>
        <button
          className="menuBtn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}
