import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s connect and share{" "}
          <span className="text-purple">ideas</span> about technology
        </h1>
        <p className="text-white-200 mt-8 md:mt-10 mb-8 text-center">
          I&apos;m a full-stack software engineer passionate about modern web
          technologies, scalable solutions, and continuous learning in the
          ever-evolving tech landscape.
        </p>
        <a href="mailto:pourushshrestha29@gmail.com">
          <MagicButton
            title="Start a conversation"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Pourush Shrestha
        </p>

        <div className="flex items-center mt-5 md:mt-0 md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              aria-label={`Visit my ${info.name} profile`}
            >
              <img
                src={info.img}
                alt={`${info.name} icon`}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
