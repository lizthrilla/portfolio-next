import {
    FaEnvelope,
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaGit
  } from "react-icons/fa";

  const links = [
    {name: "LinkedIn", href: "https://www.linkedin.com/in/elizabethtiller/", icon: <FaLinkedin />},
    {name: "Github", href: "https://github.com/lizthrilla", icon: <FaGithub />},
    {name: "eMail", href: "mailto:elizabeth.tiller@gmail.com?Subject=Hello%20again", icon: <FaEnvelope />},
    {name: "Twitter", href: "https://twitter.com/liztiller", icon: <FaTwitter />},
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
  