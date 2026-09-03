import React from "react";
import Logo from "./Logo";
import { SocialIcon } from "./Icons";
export default function Footer() {
  return (
    <footer>
      <a href="#home">
        <Logo />
      </a>
      <p>Content · Marketing · Websites · Social</p>
      <div className="social">
        <a href="#" aria-label="Instagram">
          <SocialIcon type="instagram" />
        </a>
        <a href="#" aria-label="LinkedIn">
          <SocialIcon type="linkedin" />
        </a>
        <a href="#" aria-label="Facebook">
          <SocialIcon type="facebook" />
        </a>
      </div>
      <small>© 2026 BananaBrand. All rights reserved.</small>
    </footer>
  );
}
