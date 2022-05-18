import React from "react";
import { ReactComponent as Facebook } from "@assets/socialMedia/facebook.svg";
import { ReactComponent as Instagram } from "@assets/socialMedia/instagram.svg";
import { ReactComponent as Linkedin } from "@assets/socialMedia/linkedin.svg";
import { ReactComponent as Twitter } from "@assets/socialMedia/twitter.svg";
import { socialMedia } from "./../../constants/socialMedia";

const SocialHandles = () => {
  return (
    <div className="flex gap-3 justify-center">
      <a
        rel="noreferrer"
        target="_blank"
        href={socialMedia.facebook}
        className="transition hover:text-accent"
      >
        <Facebook className="w-4 h-4" />
      </a>

      <a
        rel="noreferrer"
        target="_blank"
        href={socialMedia.twitter}
        className="transition hover:text-accent"
      >
        <Twitter className="w-4 h-4 " />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href={socialMedia.linkedin}
        className="transition hover:text-accent"
      >
        <Linkedin className="w-4 h-4 " />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href={socialMedia.instagram}
        className="transition hover:text-accent"
      >
        <Instagram className="w-4 h-4 " />
      </a>
    </div>
  );
};

export default SocialHandles;
