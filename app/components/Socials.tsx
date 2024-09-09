import {
    FaEnvelope,
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaDownload
  } from "react-icons/fa";

  const links = [
    {name: "LinkedIn", href: "https://www.linkedin.com/in/elizabethtiller/", icon: <FaLinkedin />},
    {name: "Github", href: "https://github.com/lizthrilla", icon: <FaGithub />},
    {name: "eMail", href: "mailto:elizabeth.tiller@gmail.com?Subject=Hello%20again", icon: <FaEnvelope />},
    {name: "Twitter", href: "https://twitter.com/liztiller", icon: <FaTwitter />},
    {name: "Resume", href: "https://docs.google.com/document/d/1FF4tocHbjnaTjyb8wSMrnPlDk6XHfcAxAmOHYXyJ3uY/pub", icon: <FaDownload /> },
  ]

  const SocialLinks = () => (
    <ul className="social flex flex-row">
      {
        links.map((link) => (
          <li key={link.name} className="hover:text-yellow me-2 pe-1">
            <a href={link.href} target="_blank">
              {link.icon}
            </a>
          </li>
        ))
      }
    </ul>
  );
  
  export default SocialLinks;
  